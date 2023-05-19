import express from "express";
import bcrypt from "bcrypt";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOUMnoyfXXdokkrQ-IulxDM225yUucxiU",
  authDomain: "ecommerce-website-be16f.firebaseapp.com",
  projectId: "ecommerce-website-be16f",
  storageBucket: "ecommerce-website-be16f.appspot.com",
  messagingSenderId: "612563944547",
  appId: "1:612563944547:web:17fb757ac96709214c6456"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
//init server
const app = express();

//middlewares
app.use(express.static("frontend"));
app.use(express.json()) //enables form sharing

//routes
//home route
app.get('/', (req, res) => {
    res.sendFile("index.html",{root : "frontend"})
})
//signup
app.get('/signup',(req,res) => {
    res.sendFile("signup.html", {root : "frontend"})
})
app.post('/signup', (req,res) => {
    const {name, email, password, number, tac} = req.body;

    //form validations
    if(name.length < 3){
        res.json({'alert' : 'name must be atleast 3 letter long'})
    }else if(!email.length){
        res.json({'alert': 'enter your email'})
    }else if(password.length < 8){
        res.json({'alert' : 'password must be 8 letters long'})
    }else if(!Number(number) || number.length < 10){
        res.json({'alert' : 'enter a valid phone number'})
    }else if(!tac){
        res.json({'alert' : 'you must agree with our terms and conditions'})
    }else {
        //store in database
        const users = collection(db, "users");
        getDoc(doc(users, email)).then(user => {
            if(user.exists()){
                return res.json({ 'alert' : 'email already exists'})
            }else{
                //encrypt password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt ,(err, hash) => {
                        req.body.password = hash;
                        //set the doc
                        setDoc(doc(users , email), req.body).then(data => {
                            res.json({
                                name: req.body.name,
                                email: req.body.email,
                        })
                        })
                    })
                }) 
            }
        })
    }
})

app.get('/login', (req, res) => {
    res.sendFile("login.html", {root : "frontend"})
})

app.post('/login', (req, res) => {
    let {email, password} = req.body;
    if(!email.length || !password.length){
        res.json({'alert': 'fill all the inputs'})
    }
    const users = collection(db, "users");
    getDoc(doc(users, email))
    .then(user => {
        if(!user.exists()){
            return res.json({'alert': 'email does not exists'});
        }else{
            bcrypt.compare(password, user.data().password, (err, result) => {
                if(result) {
                    let data = user.data();
                    return res.json({
                        name: data.name,
                        email: data.email,
                    })
                }else{
                    return res.json({'alert' : 'password is incorrect'})
                }
            })
        }
    })
})
app.get('/product/:id', (req, res) => {
    res.sendFile("product.html", {root : "frontend"})
})


//404 routes
app.get('/404', (req, res) => {
    res.sendFile("404.html", {root : "frontend"})
})
app.use((req,res) => {
  res.redirect('/404')
})




app.listen(3000, () => {
    console.log('listening on port 3000');
})