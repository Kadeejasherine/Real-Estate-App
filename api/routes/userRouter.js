import express from 'express'
import { deleteUser, getUser, getUserListing, test, updateUser } from "../controller/userController.js";
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();


router.get('/test',test)
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/listing/:id',verifyToken,getUserListing)
router.get('/:id',verifyToken,getUser)

export default router