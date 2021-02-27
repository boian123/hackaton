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
        this.state = {
            ownershipType: OwnershipType.INITIAL,
            numberOfPeope: 0
        }
    }


    render() {
        return undefined;
    }

}