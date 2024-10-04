import e from "express";
import cors from "cors"
import { connectDB } from "./database.js";

const app = e();
const port = 8080;
const conn = await connectDB();

app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(e.json());

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

app.post("/userprofile", async (req, res) => {
    const { name, register_number, email, phone, gender, date_of_birth, academic_info } = req.body;

    try {
        const [existingUsers] = await conn.execute(
            `SELECT * FROM userprofile WHERE email = ? OR reg_no = ?`,
            [email, register_number]
        );

        if (existingUsers.length > 0) {
            return res.status(409).json({ error: 'User with this email or registration number already exists.' });
        }

        const [academicResult] = await conn.execute(
            `INSERT INTO academic_info (tenth_marks, twelth_marks, diploma, current_backlogs, interested_in_placement) 
             VALUES (?, ?, ?, ?, ?)`,
            [academic_info.tenth_marks, academic_info.twelth_marks, academic_info.diploma, academic_info.current_backlogs, academic_info.interested_in_placement]
        );

        const academicInfoId = academicResult.insertId;

        const [userResult] = await conn.execute(
            `INSERT INTO userprofile (name, reg_no, email, phone, gender, date_of_birth, academic_id) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, register_number, email, phone, gender, date_of_birth, academicInfoId]
        );

        res.status(200).json({ id: userResult.insertId, message: 'User profile created successfully' });
    } catch (error) {
        console.log("ERROR: ",error);
        
        res.status(500).json({ error: 'Database error' });
    }
});

app.get("/userprofile/:email", async (req, res) => {
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
                academic_info ai ON up.academic_id = ai.id 
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

app.post("/contactus", async (req, res) => {
    const { name, message, email } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
        const sql = 'INSERT INTO contact_us (name, email, message) VALUES (?, ?, ?)';
        const [results] = await conn.execute(sql, [name, email, message]);

        res.status(201).json({ message: 'Message sent successfully!', id: results.insertId });
    } catch (error) {
        console.log("ERROR: ",error);
        res.status(500).json({ error: 'Database error.' });
    }
});

app.get("/contactus/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Valid ID is required.' });
    }

    try {
        const sql = 'SELECT * FROM contact_us WHERE id = ?';
        const [results] = await conn.execute(sql, [id]);

        if (results.length === 0) {
            return res.status(404).json({ error: 'Message not found.' });
        }

        res.status(200).json(results[0]);
    } catch (error) {
        console.log("ERROR: ",error);
        res.status(500).json({ error: 'Database error.' });
    }
});

app.post("/admin", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    try {
        const [existingUser] = await conn.execute('SELECT * FROM admin WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(409).json({ error: 'Email already in use.' });
        }

        const sql = 'INSERT INTO admin (name, email, password) VALUES (?, ?, ?)';
        const [results] = await conn.execute(sql, [name, email, password]);

        res.status(200).json({ message: 'Admin user created successfully!', id: results.insertId });
    } catch (error) {
        console.log("ERROR: ",error)
        res.status(500).json({ error: 'Database error.' });
    }
});

app.get("/admin/:email", async (req, res) => {
    const adminEmail = req.params.email;

    try {
        const query = `
            SELECT id, name, email 
            FROM admin 
            WHERE email = ?`;

        const [results] = await conn.execute(query, [adminEmail]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.json(results[0]).status(200);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ error: 'Database query error' });
    }
});
