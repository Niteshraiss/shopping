import express from 'express';
import { getUserProfile, registerUser, authUser, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleWare/authMiddleWare.js";

const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

router.route('/').post(registerUser);
export default router;