import React from 'react';
import LocationSearchInput from "./LocationSearchComponent";
interface CityRegionProps {

}

interface CityRegionState {
    address: string
}

export default class CityRegionStepComponent extends React.Component<CityRegionProps, CityRegionState> {
    constructor(props: CityRegionProps) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            address: ''
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.handleInput} type="text">Please enter your location</input>
                <LocationSearchInput address={this.state.address}/>
            </div>
        );
    }

    handleInput(event: any){
        if (event.target.value) {
            this.setState({address: event.target.value})
        }
    };
}
