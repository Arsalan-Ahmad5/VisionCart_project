const express=require('express');
const authenticateToken = require("../middlewares/authmiddleware");
const authorizeRole = require("../middlewares/rolemiddleware");
const {updateProduct,
    deleteProduct,
    getallProducts,
    getProductsbyId,
    addProduct} =require('../controllers/productsController');
const router=express.Router();

router.post('/',authorizeRole("admin") ,addProduct);

router.put('/:id',authorizeRole("admin") ,updateProduct);

router.get('/',authorizeRole("admin" ,"supervisor") ,getallProducts);

router.get('/:id',authorizeRole("admin","supervisor") ,getProductsbyId);

router.delete('/:id',authorizeRole("admin") ,deleteProduct);


module.exports=router