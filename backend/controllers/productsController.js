require("dotenv").config();
const pool = require("../config/db");


const addProduct=async (req,res)=>{
    const {name,
        price,
        sku,
        category,
        quantity,
        unit,
        reorder_level,
        stock,
        image}=req.body;

    if(!name || price < 0 || !sku || !category || !quantity || !unit || !reorder_level || !stock){
        return res.status(400).json({
            message:"All fiels are required to be filled"
        })
    }

    try{
        const result = await pool.query(
            `INSERT INTO products
            (name, price, sku, category, quantity, unit, reorder_level, stock, image)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            RETURNING *`,
            [
                name,
                price,
                sku,
                category || null,
                quantity || null,
                unit || null,
                reorder_level ?? 10,
                stock ?? 0,
                image || null
            ]
        );

        return res.status(201).json({
            message: "Product added successfully",
            product: result.rows[0]
        });
    }catch(err){
         console.error("Add product error:", error);

        // Duplicate SKU
        if (error.code === "23505") {
            return res.status(409).json({
                message: "SKU already exists"
            });
        }
        return res.json({
            "message":"Failed to add the product."
        })
        
    }


}

const updateProduct = async (req, res) => {

    const { id } = req.params;

    const {
        name,
        price,
        sku,
        category,
        quantity,
        unit,
        reorder_level,
        stock,
        image
    } = req.body;

    if (!name || price === undefined || price < 0 || !sku) {
        return res.status(400).json({
            message: "Name, price and SKU are required"
        });
    }

    try {

        const result = await pool.query(
            `UPDATE products
             SET name = $1,
                 price = $2,
                 sku = $3,
                 category = $4,
                 quantity = $5,
                 unit = $6,
                 reorder_level = $7,
                 stock = $8,
                 image = $9,
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $10
             RETURNING *`,
            [
                name,
                price,
                sku,
                category || null,
                quantity || null,
                unit || null,
                reorder_level ?? 10,
                stock ?? 0,
                image || null,
                id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            product: result.rows[0]
        });

    } catch (error) {

        console.error("Update product error:", error);

        if (error.code === "23505") {
            return res.status(409).json({
                message: "SKU already exists"
            });
        }

        return res.status(500).json({
            message: "Failed to update product"
        });
    }
};

const getProductsbyId = async (req, res) => {

    const { id } = req.params;

    try {

        const result = await pool.query(
            "SELECT * FROM products WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            product: result.rows[0]
        });

    } catch (error) {

        console.error("Get product error:", error);

        return res.status(500).json({
            message: "Failed to fetch product"
        });
    }
};

const deleteProduct = async (req, res) => {

    const { id } = req.params;

    try {

        const result = await pool.query(
            "DELETE FROM products WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            product: result.rows[0]
        });

    } catch (error) {

        console.error("Delete product error:", error);

        return res.status(500).json({
            message: "Failed to delete product"
        });
    }
};


const getallProducts = async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM products ORDER BY id DESC"
        );

        return res.status(200).json({
            count: result.rows.length,
            products: result.rows
        });

    } catch (error) {

        console.error("Get products error:", error);

        return res.status(500).json({
            message: "Failed to fetch products"
        });
    }
};


module.exports={updateProduct,deleteProduct,getallProducts,getProductsbyId,addProduct}