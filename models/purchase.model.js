import { Schema, model } from "mongoose";


const purchaseSchema = new Schema({
    shipping:{type:String},
    albumId:{type: Schema.Types.ObjectId,
    ref:'album'}
})

const PurchaseModel = model('purchase', purchaseSchema)
export default PurchaseModel