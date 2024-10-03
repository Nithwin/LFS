import mysql2 from "mysql2/promise.js"

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "26035",
    database: "LanguageFusionSystem"
}

let connection;

export const connectDB = async () => {
    // if(connection) {
    //     return connection;
    // }

    try {
        const conn = await mysql2.createConnection(dbConfig);
        // connection = conn;

        return conn;
    } catch (error) {
        console.error("Error: ",error);
        // connection = null;
        return null;
    }
}