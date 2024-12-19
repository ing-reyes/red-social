import { Request, Response, Router } from "express";
import { UsersRoutes } from "./users/users.routes";

export class AppRoutes{

    static get routes(): Router{
        const router = Router();

        router.use("/users", UsersRoutes.routes );
        
        return router;
    }
}