import {Router} from "express";
import { matchPassword } from "../services";
const router = Router();

router.post('/login' , async() =>{
    const {email , password} = req.body;
    const user = getUser({email: req.body.email});
    if(!user){
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const passwordMatched = matchPassword(req.body.password , user.password);
    if(!passwordMatched){
        return res.status(401).json({ message: 'Invalid email or password' });
    }
})