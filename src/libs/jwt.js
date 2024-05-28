import {tokenSecret} from '../config.js'
import jwt from 'jsonwebtoken'

export function createAccesssToken(payload){
    return new Promise (( resolve , reject) => {
        jwt.sign(
            payload,
            tokenSecret,
            {
                expiresIn : "1d" , 
            },
            (err, token)=> {
                if (err) reject(err);
                resolve(token)
            });
    });
}
