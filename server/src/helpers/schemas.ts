
import { model,Schema,Document} from "mongoose";
import { IWaterBill,IBuildingType,IElectricityBill,IOwnership} from "./interfaces";



const ownershipSchema = new Schema<IOwnership>({
    people: Number,
    ownership: String
})

const buildTypeSchema = new Schema<IBuildingType>({
    buildingType:String,
    yearOfConstruction:Number,
    
})





const  electricityBillSchema = new Schema<IElectricityBill>({
        provider:{type:String, required: true},
        amount:{type:Number, required:true},
        netUsage:{type:Number},
        heatingType:{type:String, required:true}
})





const waterBillSchema = new Schema<IWaterBill>({
    provider:{
        type:String,
        required:[true,"please choose a water provider"],
      
    },
    amount:{type:Number, required:true},
    usage:{type:Number,required:true},
 
})

export { waterBillSchema,electricityBillSchema,buildTypeSchema,ownershipSchema } 