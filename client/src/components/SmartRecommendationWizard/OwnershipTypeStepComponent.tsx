import React from 'react';
import {OwnershipType} from "../../utils/Enums";

interface OwnershipTypeProps {

}

interface OwnershipTypeState {
    ownershipType: OwnershipType;
    numberOfPeope: number

}

export default class OwnershipTypeStepComponent extends React.Component<OwnershipTypeProps, OwnershipTypeState> {
    constructor(props: OwnershipTypeProps) {
        super(props);
        this.handleNumberOfPeopleInput = this.handleNumberOfPeopleInput.bind(this);
        this.handleOwnershipSelection = this.handleOwnershipSelection.bind(this);
        this.state = {
            ownershipType: OwnershipType.INITIAL,
            numberOfPeope: 0
        }
    }


    render() {
        return undefined;
    }

    handleOwnershipSelection(event: any) {
        this.setState({ownershipType: event.target.value});
    }

    handleNumberOfPeopleInput(event: any) {
        this.setState({numberOfPeope: event.target.value});
    }

}