import {ownershipSchema,electricityBillSchema,buildTypeSchema,waterBillSchema} from '../helpers/schemas';
import { Schema,model} from 'mongoose';



const dataSchema = new Schema({

    ownership:ownershipSchema,
    electricityBill:electricityBillSchema,
    buildType:buildTypeSchema,
    waterBill:waterBillSchema,

})

export default model('Data', dataSchema)


req.body.ownership.people.value * 50
