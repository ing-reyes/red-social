import { Request, Response } from "express";
import { UsersService } from './users.service';
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { Handler } from "../common/errors/handle.error";

export class UsersController{

    constructor(
        private readonly usersService: UsersService,
    ){}

    create = ( req: Request, res: Response ) =>{

        this.usersService.create( req.body.user )
        .then((user)=>res.status(200).json(user))
        .catch((err)=>Handler.error(err, res))
    }

    findAll = ( req: Request, res: Response ) =>{
        this.usersService.findAll()
        .then((users)=>res.status(200).json(users))
        .catch((err)=>Handler.error(err, res))
    }

    finOne = ( req: Request, res: Response ) =>{
        this.usersService.findOne( req.params.id )
        .then((user)=>res.status(200).json(user))
        .catch((err)=> Handler.error(err, res) )
    }

    update = ( req: Request, res: Response ) =>{
        
        this.usersService.update(req.params.id, req.body.user )
        .then((user)=>res.status(200).json(user))
        .catch((err)=>Handler.error(err, res))
    }

    remove = ( req: Request, res: Response ) =>{
        this.usersService.remove( req.params.id )
        .then((user)=>res.status(200).json(user))
        .catch((err)=>Handler.error(err, res))
    }

}
