import bcrypt from "bcrypt";
import { Router} from "express";


import auth from "../middleware/auth";

import { getAllUsers,getUser,deleteUser ,updateUsername} from "../controllers/userController";


const router: Router = Router();


router.get('/users',auth,getAllUsers)
router.get('/user/:id',auth,getUser)
router.delete('/user/:id',auth,deleteUser)
router.put('/user/:id',auth,updateUsername)



















export default router;


