import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesssToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userFound = await User.findOne({email})
    if(userFound) return res.status(400).json(["el correo ya esta siendo usado"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUSer = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUSer.save();

    const token = await createAccesssToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updateAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const login  = async (req, res) => 
    {
        const {email , password } = req.body;
    
        try {
            const userFound = await User.findOne({email})
            if(!userFound) return res.status(400).json({message: "usuario no encontrado"})
    
            const isMAtch = await bcrypt.compare(password , userFound.password)
            if(!isMAtch) return res.status(400).json({message: "contraseña erronea"})
        
            const token = await createAccesssToken ({id : userFound._id});
            
            res.cookie("token" , token);
            res.json({
                id : userFound._id,
                username : userFound.username,
                email : userFound.email,
                createdAt : userFound.createdAt,
                updateAt : userFound.updateAt,
            })
            } catch (error) {
            res.status(500).json({message: error.message})
        }     
    };

export const logout  = async (req, res) => 
    {
        res.cookie('token', "" , {
            expires : new Date(0)
        });
        return res.sendStatus(200);
    };



export const profile = async (req, res) =>
    {
        const userFound = User.findById(req.user.id)
        // console.log(userFound ,'entro')
        if(!userFound) return res.status(400).json(["usario no encontrado"])
    
        return res.json({
            id : userFound._id,
            username : userFound.username,
            email : userFound.email,
            createdAt : userFound.createdAt,
            updateAt : userFound.updateAt,
        })
    }