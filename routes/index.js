const response=require('../utils/response');

const routes={
    "/":{
        GET:(_req,res)=>{
        response(res,{data:{message:"running node js api"}})     
        }
    }, 
    "/users":{
        GET:userController.getusers,

    },
}
module.exports=routes;