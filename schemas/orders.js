import mongoose from "mongoose";
import {orderStatus} from '../constants.js';


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    items: [{
        itemId: {type: mongoose.Schema.Types.ObjectId, ref: "items"},
        quantity: {type: Number, required: true}
    }],
    status: {
        type: String,
        enum: Object.values(orderStatus),
        default: orderStatus.NONE
    },
    postalAddress: {
        type: String,
        required: true,
        unique: false,
    },
    totalPrice: {
        type: Number,
        required: true,
        DEFAULT: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default orderSchema;
