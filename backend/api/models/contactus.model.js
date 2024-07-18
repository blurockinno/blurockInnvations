import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            reuqired: true,
        },
        email:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true
    }
)

export const ContactUs = mongoose.model("contactusdata",contactUsSchema);