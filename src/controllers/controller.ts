import {Request,Response} from 'express';







const details=(req:Request, res:Response):void=>{
    // here intypescript we neeed to take care of types of the variable like req, res need to be defined
    //  so we take them as request and response type
    

interface objec{
    x:number;
    y:number;
}
 const sum =(obj:objec)=>{
    return obj.x+obj.y
 }
 const rrr={
    x:2,
    y:22
 }
 res.json({
    data:"everything is fine and good",
    da:sum(rrr)
})  


}   


export {details}