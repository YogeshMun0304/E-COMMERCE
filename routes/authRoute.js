import express  from "express";
import {registerController, loginController, testController} from '../controllers/registerController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddlware.js";
const router = express.Router()


router.post('/register',registerController)
router.post('/login',loginController)
router.get("/test", requireSignIn, isAdmin, testController);
export default router