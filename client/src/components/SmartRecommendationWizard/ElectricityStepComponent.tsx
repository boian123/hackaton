import React from 'react';
import {ElectricityBill} from "../../Models/ElectricityBill";
import {ElectricityProvider, HeatingType} from "../../utils/Enums";
/* how to inject the iterator in the class */
/* import Iterator from "../../utils/Iterator"; */


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
        return (
          <React.Fragment>
          <div className="form-group">
            <label>Electricity amount</label>
            <br />
            <input type="text" className="form-control" placeholder="Enter kW Amount" />
            <br />
            <label>Type of heating</label>
            <br />
            makeInputElementsFromList(HeatingType, "types_of_heating");
            <br />
            <label>Electricity Provider</label>
            <br />
            makeInputElementsFromList(ElectricityProvider, "el_provider");
          </div>
        </React.Fragment>
        );
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
