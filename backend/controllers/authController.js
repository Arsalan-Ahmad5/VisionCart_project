require("dotenv").config();
const express = require("express");
const pool = require("../config/db");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            role,
            adminSecretKey
        } = req.body;

        // Basic validation
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "All required fields must be provided"
            });
        }

        // Validate role
        if (!["admin", "supervisor"].includes(role)) {
            return res.status(400).json({
                message: "Invalid role"
            });
        }

        // Admin secret verification
        if (role === "admin") {
            if (!adminSecretKey) {
                return res.status(400).json({
                    message: "Admin secret key is required"
                });
            }

            if (
                adminSecretKey !== process.env.ADMIN_SECRET_KEY
            ) {
                return res.status(403).json({
                    message: "Invalid admin secret key"
                });
            }
        }

        // Check existing user
        const existingUser = await pool.query(
            "SELECT id FROM users WHERE email = $1",
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const result = await pool.query(
            `INSERT INTO users
            (name, email, password_hash, role)
            VALUES ($1, $2, $3, $4)
            RETURNING id, name, email, role, created_at`,
            [
                name,
                email,
                hashedPassword,
                role
            ]
        );

        return res.status(201).json({
            message: "User registered successfully",
            user: result.rows[0]
        });

    } catch (error) {
        console.error("Register error:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = result.rows[0];

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email:user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        res.status(200).json({
            message: "Login successful",

            token,

            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

const logout=async(req,res)=>{
      res.clearCookie("token", {
         httpOnly: true,
         secure: process.env.NODE_ENV === 'production',
         sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
      });
   
      return res.status(200).json({
         success:true,
         message:"Logout Successfully"
      });
   
};

module.exports={signup,login,logout};