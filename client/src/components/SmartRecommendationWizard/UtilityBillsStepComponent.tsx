import React from 'react';
import {ElectricityBill} from "../../Models/ElectricityBill";
import {ElectricityProvider, HeatingType, WaterProvider} from "../../utils/Enums";
import {WaterBill} from "../../Models/WaterBill";

interface UtilityBillsProps {

}

interface UtilityBillsState {
    electricityBill: ElectricityBill,
    waterBill: WaterBill
}

export default class UtilityBillsStepComponent extends React.Component<UtilityBillsProps, UtilityBillsState>{
    constructor(props:UtilityBillsProps) {
        super(props);
        this.state = {
            electricityBill: {
                amount: 0,
                provider: ElectricityProvider.INITIAL,
                heatingType: HeatingType.INITIAL
            },
            waterBill: {
                amount: 0,
                provider: WaterProvider.INITIAL
            }

        }
    }

    render() {
        return undefined;
    }

}