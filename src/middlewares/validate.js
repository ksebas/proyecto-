import jwt  from "jsonwebtoken";
import {tokenSecret} from '../config.js'

export const authRequired = (req , res , next)=>{
    const {token} = req.cookies;
   
    if(!token) return res.status(401).json({message: "no hay token autorizado"});

    jwt.verify(token, tokenSecret , (err , user) =>{
        if(err) return res.status(403).json({message: "token invalido"})
        console.log(user);
    req.user = user;
        next();
    });
   
}