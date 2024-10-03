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
});

app.listen(port,function() {
    console.log("Server started at port",port);
});

app.get("/",async (req,res) => {
    return res.json({
        message: "Hello from server",
    }).status(200);
});

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
});

app.get("/user/:email", async (req, res) => {
    const user_email = req.params.email;

    try {
        const query = `
            SELECT 
                up.id, 
                up.name, 
                up.reg_no, 
                up.email, 
                up.phone, 
                up.gender, 
                up.date_of_birth, 
                ai.tenth_marks, 
                ai.twelth_marks, 
                ai.diploma, 
                ai.current_backlogs, 
                ai.interested_in_placement 
            FROM 
                userprofile up 
            LEFT JOIN 
                academic_info ai ON up.academic_info_id = ai.id 
            WHERE 
                up.email = ?`;

        const [results] = await conn.execute(query, [user_email]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(results[0]);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ error: 'Database query error' });
    }
});

app.post("/user", async (req, res) => {
    const { name, register_number, email, phone, gender, date_of_birth, academic_info } = req.body;

    try {
        const [academicResult] = await conn.execute(
            `INSERT INTO academic_info (tenth_marks, twelth_marks, diploma, current_backlogs, interested_in_placement) 
             VALUES (?, ?, ?, ?, ?)`,
            [academic_info.tenth_marks, academic_info.twelfth_marks, academic_info.diploma, academic_info.current_backlogs, academic_info.interested_in_placement]
        );

        const academicInfoId = academicResult.insertId;

        const [userResult] = await conn.execute(
            `INSERT INTO userprofile (name, reg_no, email, phone, gender, date_of_birth, academic_info_id) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, register_number, email, phone, gender, date_of_birth, academicInfoId]
        );

        res.status(200).json({ id: userResult.insertId, message: 'User profile created successfully' });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

