import {WaterProvider,BuildingMaterial,OwnershipType,HeatingType,ElectricityProvider} from "../types/Enums"
import { Document } from "mongoose";

interface IOwnership extends Document {
    people:Number
    ownership:OwnershipType
}


interface IBuildingType extends Document{
    buildingType: BuildingMaterial,
    yearOfConstruction: number
}


interface IElectricityBill extends Document {
    provider: ElectricityProvider,
    amount: number,
    netUsage?: number,
    heatingType: HeatingType
}



interface IWaterBill extends Document {
    provider:WaterProvider
    amount: number,
    usage: number,

}

export {IBuildingType,IElectricityBill,IWaterBill,IOwnership}