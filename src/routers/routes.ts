



import express from 'express';
 const router = express.Router();

import {details} from '../controllers/controller'

const app = express();



router.get('/get',details )


export{router}