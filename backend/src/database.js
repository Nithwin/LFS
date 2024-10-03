import mysql2 from "mysql2/promise.js"

const dbConfig = {
    host: "localhost",
    database: "LFS",
    user: "root",
    password: "1234"
}

let connection;

export const connectDB = async () => {
       try{
        const conn = await mysql2.createConnection(dbConfig);

        return conn;
    } catch (error) {
        console.error("Error: ",error);
        return null;
    }
}