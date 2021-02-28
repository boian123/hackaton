import {WaterBill} from "../../Models/WaterBill";
import React from "react";
import {WaterProvider} from "../../utils/Enums";

interface WaterBillProps {

}

interface WaterBillState extends WaterBill{

}


export default class WaterBillComponent extends React.Component<WaterBillProps, WaterBillState> {
    constructor(props: WaterBillProps) {
        super(props);
        this.handleProviderInput = this.handleProviderInput.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.state = {
            provider: WaterProvider.INITIAL,
            amount: 0
        }
    }

    render() {
      return (
        <React.Fragment>
          <div className="form-group">
            <label>Water amount</label>
            <br />
            <input type="text" className="form-control" placeholder="Enter m3 (cubic meter) amount" />
            <br />
            <label>Water Provider</label>
            <br />
            makeInputElementsFromList(WaterProvider, "water_provider");
          </div>
        </React.Fragment>
      );
    }

    handleProviderInput(event: any) {
        this.setState({provider: event.target.value});
    }

    handleAmount(event: any) {
        this.setState({amount: event.target.value});
    }



}
