require("dotenv").config();
const express = require("express");
const pool = require("./config/db");
const cors = require("cors");
const authorizeRole=require("./middlewares/rolemiddleware");
const authenticateToken=require("./middlewares/authmiddleware")
const  productsRoutes= require('./routes/productsRoutes')
const authRoutes = require("./routes/authroutes");
const testroutes = require("./routes/testroutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/test",testroutes);
app.use("/api/products",authenticateToken,productsRoutes);
app.get("/",(req,res)=>{
    res.send("Working man");
})


app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            message: "PostgreSQL connected",
            time: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Database connection failed"
        });
    }
});



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


module.exports = app;