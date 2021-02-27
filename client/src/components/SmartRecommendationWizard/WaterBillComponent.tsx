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
        return undefined;
    }

    handleProviderInput(event: any) {
        this.setState({provider: event.target.value});
    }

    handleAmount(event: any) {
        this.setState({amount: event.target.value});
    }



}