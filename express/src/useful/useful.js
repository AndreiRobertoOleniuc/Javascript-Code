import cookie_parser from "cookie-parser";
import session from "express-session";
import {users,foods,addToUser} from "./dummydata.js";


//app.use(cookie_parser());
app.use(session({
    secret:"some secret",
    cookie: {maxAge: 30000},
    saveUninitialized:false,
}))

// Middleware before Post
const validateAuthToken = (req,res,next)=>{
    console.log("Validating")
    const {authorization} = req.headers;
    if(authorization && authorization === "123"){
        next();
    }else{
        res.status(403).send({msg: "Forbidden"})
    }
}
app.post("/user",validateAuthToken,(req,res)=>{
    try {
        addToUser(req.body);
        res.status(200).send(req.body);
    } catch (error) {
        res.status(500).send("Failed");
    }
})

//Mit Params /Andrei
router.get("/users/:name",(req,res)=>{
    const {name} = req.params;
    const user = users.find((user)=>user.name===name);
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send("Not found");
    }
})


//Mit Query (?name=Andrei)
app.get("/food",(req,res)=>{
    const {title} = req.query;
    if(title){
        const food = foods.find((food)=> food.name===title)
        if(food){
            res.status(200).send(food);
        }else{
            res.status(404).send("Not found")
        }
    }else{
        res.status(200).send(foods);
    }
})

//Cookies and the use
const validateCookie = (req,res,next)=>{
    const {cookies}= req;
    if("sessionid" in cookies){
        console.log("Session ID Exists.");
        if(cookies.sessionid === "12345"){
            next();
        }else{
            res.status(403).send("Not Auth")
        }
    }else{
        res.status(403).send("Not Auth")
    }
}
app.get("/signin",(req,res)=>{
    res.cookie("sessionid","12345");
    res.status(200).send("Logged In.");
})
app.get("/protected",validateCookie,(req,res)=>{
    res.status(200).send("You are Auth");
})


//Session

app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    if(username && password){
        if(req.session.authenticated){
            res.json(req.session)
        }else{
            if(password==="12345"&&username==="Andrei"){
                req.session.authenticated= true;
                req.session.user = {
                    username,password
                }
                res.json(req.session);
            }else{
                res.status(403).json({msg:"Bad Credentials"})
            }
        }
    }else{
        res.status(403).json({msg:"Bad Credentials"})
    }
})