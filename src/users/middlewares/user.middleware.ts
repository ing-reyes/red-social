import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dtos/create-user.dto";
import { validate } from "class-validator";
import { UpdateUserDto } from "../dtos/update-user.dto";

export class UserMidlleware{
    static createUser( req: Request, res: Response, next: NextFunction ){
        const { username, email, password, fullName, bio, profileImage } = req.body;
        const valid = new CreateUserDto();

        valid.username = username;
        valid.email = email;
        valid.password = password;
        valid.fullName = fullName;
        valid.bio = bio;
        valid.profileImage = profileImage;

        req.body.user = {
            username, 
            email, 
            password, 
            fullName, 
            bio, 
            profileImage
        }

        validate(valid).then((err)=>{
            if( err.length > 0 ){
                return res.status(400).json({
                    statusMsg: "BAD_REQUEST",
                    statusCode: 400,
                    message: err,
                })
            }else{
                next();
            }
        })
    }

    static updateUser( req: Request, res: Response, next: NextFunction ){
        const { username, email, password, fullName, bio, profileImage } = req.body;
        const valid = new UpdateUserDto();

        valid.username = username;
        valid.email = email;
        valid.password = password;
        valid.fullName = fullName;
        valid.bio = bio;
        valid.profileImage = profileImage;

        req.body.user = {
            username, 
            email, 
            password, 
            fullName, 
            bio, 
            profileImage
        }

        validate(valid).then((err)=>{
            if( err.length > 0 ){
                return res.status(400).json({
                    statusMsg: "BAD_REQUEST",
                    statusCode: 400,
                    message: err,
                })
            }else{
                next();
            }
        })
    }
}