import {ElectricityProvider, HeatingType} from "../utils/Enums";

export interface ElectricityBill {
    provider: ElectricityProvider,
    amount: number,
    netUsage?: number,
    heatingType: HeatingType
}