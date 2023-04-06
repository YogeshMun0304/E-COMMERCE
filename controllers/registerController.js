
import userModel from '../models/userModel.js'
import {comparePassword, hashPassword}  from '../helpers/authHelper.js'
import JWT from 'jsonwebtoken'
export const registerController=async(req,res)=>{
    try {
        console.log(req.body)
        const {name,email,password,phone,address}= req.body;
        if(!name){
            return res.send({error:'Name is required'})
            
        }
        if(!email){
            return res.send({error:'email is required'})
            
        }
        if(!password){
            return res.send({error:'Password is required'})
            
        }
        if(!phone){
            return res.send({error:'phone is required'})
            
        }
        if(!address){
            return res.send({error:'address is required'})
            
        }
        const existingUser = await userModel.findOne({email})
    if(existingUser){
        return res.status(200).send({
            success:true,
            message:'user already exist'


        })
        
    }
    const hashedPassword = await hashPassword(password)
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      
    }).save()
    res.status(201).send({
        success:true,
        message:"user registered successfully",
        user
    })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registration',
            error
        })
    }
    

}
export const loginController=async(req,res)=>{
    try {
        const {email , password}= req.body;
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'invalid email or password'
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'email is not registered'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(404).send({
                success:false,
                message:'invalid password'
            })
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,

            },
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in login',
            error
        })
    }
}
export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };



