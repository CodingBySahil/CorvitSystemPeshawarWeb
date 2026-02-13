let express = require("express");

const app = express();

// this will allow express to read data from form
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.send("<h1>hello from server</h1>")
})
app.get("/form",(req,res)=>{
    res.render("Form")
})

app.post("/register",(req,res)=>{
    const {name,email,role} = req.body
    res.send(req.body)
    console.log(`Your name is ${name} and email is ${email} and your role is ${role}`);
    
})
app.listen(4747,()=>{
    console.log("server is running at http://localhost:4747");
})