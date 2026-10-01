const express = require("express");

const authenticateToken = require("../middlewares/authmiddleware");
const authorizeRole = require("../middlewares/rolemiddleware");

const router = express.Router();

router.get(
    "/admin",
    authenticateToken,
    authorizeRole("admin"),
    (req, res) => {
        res.json({
            message: "Welcome Admin",
            user: req.user
        });
    }
);

router.get(
    "/supervisor",
    authenticateToken,
    authorizeRole("supervisor"),
    (req, res) => {
        res.json({
            message: "Welcome Supervisor",
            user: req.user
        });
    }
);

router.get(
    "/common",
    authenticateToken,
    authorizeRole("admin", "supervisor"),
    (req, res) => {
        res.json({
            message: "Authenticated user",
            user: req.user
        });
    }
);

module.exports = router;