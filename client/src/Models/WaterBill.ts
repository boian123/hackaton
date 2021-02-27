import {WaterProvider} from "../utils/Enums";

export interface WaterBill {
    provider: WaterProvider,
    amount: number,
    usage?: number,
}