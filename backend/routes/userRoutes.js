import express from 'express';
import { getUserProfile, registerUser, authUser } from "../controllers/userController.js";
import { protect } from "../middleWare/authMiddleWare.js";

const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser);
export default router;