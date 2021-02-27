
import { Router } from "express";
import { body } from "express-validator";
import {dataRequest} from "../controllers/dataController"



 



const router: Router = Router();


router.post('/steps',dataRequest)


// router.post(

// )

export default router;
