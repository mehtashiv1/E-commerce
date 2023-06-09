import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    email :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const USER = model('user', userSchema);