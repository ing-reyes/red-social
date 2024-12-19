import { Request, Response, Router } from "express";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserMidlleware } from "./middlewares/user.middleware";

export class UsersRoutes{

    static get routes(): Router{
        const router = Router();
        const usersService = new UsersService()
        const usersController = new UsersController( usersService ); 
        
        // localhost:3000/users
        router.post("/", [UserMidlleware.createUser], usersController.create );
        router.get("/", usersController.findAll );
        router.get("/:id", usersController.finOne );
        router.patch("/:id",[ UserMidlleware.updateUser ], usersController.update );
        router.delete("/:id", usersController.remove );
        
        return router;
    }
}