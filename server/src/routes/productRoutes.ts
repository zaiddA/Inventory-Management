import {Router} from "express";
import {createProduct, getProduct} from "../contollers/productController"

const router= Router();

router.get("/",getProduct);
router.post("/",createProduct);

export default router;