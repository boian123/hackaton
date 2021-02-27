import React from 'react';
import {ElectricityBill} from "../../Models/ElectricityBill";
import {ElectricityProvider, HeatingType} from "../../utils/Enums";

interface ElectricityBillProps {

}

interface ElectricityBillState extends ElectricityBill {

}

export default class ElectricityStepComponent extends React.Component<ElectricityBillProps, ElectricityBillState>{
    constructor(props:ElectricityBillProps) {
        super(props);
        this.handleElectricityAmount = this.handleElectricityAmount.bind(this);
        this.handleHeatingType = this.handleHeatingType.bind(this);
        this.handleProviderSelection = this.handleProviderSelection.bind(this);
        this.state = {
                amount: 0,
                provider: ElectricityProvider.INITIAL,
                heatingType: HeatingType.INITIAL
        }
    }

    render() {
        return undefined;
    }

    handleElectricityAmount(event: any) {
        this.setState({amount: event.target.value});
    }

    handleProviderSelection(event: any) {
        this.setState({provider: event.target.value});
    }

    handleHeatingType(event: any) {
        this.setState({heatingType: event.target.value});
    }

}