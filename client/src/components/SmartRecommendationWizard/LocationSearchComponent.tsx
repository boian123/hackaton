import React from 'react';
// @ts-ignore
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

interface LocationSearchProps {
    address: string
}

interface LocationSearchState {
    address: string
}

export default class LocationSearchInput extends React.Component<LocationSearchProps, LocationSearchState> {
    constructor(props: LocationSearchProps) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = (address: string) => {
        this.setState({ address: address });
    };

    handleSelect = (address: string) => {
        geocodeByAddress(address)
            .then((results: any[]) => getLatLng(results[0]))
            .then((latLng: any) => console.log('Success', latLng))
            .catch((error: any) => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {(getInputProps: any, suggestions: any, getSuggestionItemProps: any, loading: any ) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion: { active: any; description: React.ReactNode; }) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}