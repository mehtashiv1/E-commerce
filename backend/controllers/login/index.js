import express from "express";
import  path  from "path";
import { getUser,matchPassword } from "../../services/index.js";
const router = express.Router();
const __dirname = path.resolve();
// router.use( express.static(__dirname + '../about.css'));
// router.use( express.static(__dirname + '../script.js'));


router.post('/login' , async(req,res) =>{
    try{
    const {email , password} = req.body;
    console.log(req.body.email);
    const user = await getUser({email: req.body.email});
    if(!user){
        return res.status(401).json({ message: 'User not registered ! Please try to sign Up Now' });
    }
    const passwordMatched = await matchPassword(req.body.password , user.password);
    console.log(passwordMatched);
    if(!passwordMatched){
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({
        success: true,
        message: 'Login successful'
    });
}catch(err){
    res.status(401).send(err);
}
})

router.get('/blog', (req, res) => {
    const file = path.join(__dirname, '../blog.html');
    res.sendFile(file);
    // res.sendFile('../blog.html', {root: __dirname });
  });

export const loginController = router;