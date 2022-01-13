const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController.js");
const { isAuthenticatedUser, authorizeRoles } = require('../middleWare/auth.js');

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post( isAuthenticatedUser,authorizeRoles("admin"), createProduct);

router.route("/product/:id").put(isAuthenticatedUser, updateProduct);

router.route("/product/:id").delete(isAuthenticatedUser, deleteProduct).get(getProductDetails);




module.exports = router;