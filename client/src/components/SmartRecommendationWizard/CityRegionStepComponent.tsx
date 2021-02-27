import React from 'react';
import Location from '../../Models/Location';
interface CityRegionProps {

}

interface CityRegionState extends Location {
}

export default class CityRegionStepComponent extends React.Component<CityRegionProps, CityRegionState> {
    constructor(props: CityRegionProps) {
        super(props);
        this.state = {
            city: '',
            region:''
        }
    }

    render() {
        return undefined;
    }
}