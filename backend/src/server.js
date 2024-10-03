import e from "express";
import cors from "cors"
import { connectDB } from "./database.js";

const app = e();
const port = 8080;
const conn = await connectDB();

app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(e.json())

app.use((req,res,next) => {
    console.log("Req received");
    next();
})

app.listen(port,function() {
    console.log("Server started at port",port);
});

app.get("/",async (req,res) => {
    return res.json({
        message: "Hello from server",
    }).status(200);
})

app.post("/signup",async (req,res) => {
    const { email, password } = req.body;
    const user = await conn.execute("SELECT email FROM user");
    
    if(user[0].length > 0) {
        return res.json({
            message: "User already exists with the given email"
        }).status(400);
    }

    const u = await conn.execute("INSERT INTO user(email,password) values (" + email + ", " + password);

    return res.json({
        message: "User created successfully",
    }).status(200);
});

app.post("/signin",async (req,res) => {
    const { email, password } = req.body;
    
    const user = await conn.execute("SELECT id, email FROM user WHERE email=" + email + " AND " + " password=" + password);

    if(user[0].length === 0) {
        return res.json({
            message: "User not found"
        }).status(404);
    }

    return res.redirect("http://localhost:3000/user");
})