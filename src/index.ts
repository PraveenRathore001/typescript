import express,{Request,Response} from 'express';
const app = express();
import {router} from './routers/routes'
const port= 4011

app.use('/',router)


app.listen(port,():void=>{

    console.log('listening on port',port);
});