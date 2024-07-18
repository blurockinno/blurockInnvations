import { ContactUs } from "../models/contactus.model.js";

export const newContactUsData = async (req, res) =>{

    //fetch data from request body
    const{name,email,message}=req.body;
    console.log(req.body)
    console.log(name)
    console.log(email)
    console.log(message)

    //validation
    if(!name){
        return res.status(400).json({error:"Name is required"})
    }
    if(!email){
        return res.status(400).json({error:"Email is required"})
    }
    if(!message){
        return res.status(400).json({error:"Message is required"})
    }

    const contact = await ContactUs.create(
        {name, email, message}
    )
    res.status(200).json({success:true, message:"data send successfully", contact})



} 