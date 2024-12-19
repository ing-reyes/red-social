import { Response } from "express";
import { ManagerError } from "./manager.error";

export class Handler {
    static error( error: unknown, res: Response ){
        if( error instanceof ManagerError ){
            res.status( error.statusCode ).json({ statusMsg: error.statusMsg, statusCode: error.statusCode, message: error.message })
            return;
        }

        res.status(500).json({ statusMsg: "INTERNAL_SERVER_ERROR", statusCode: 500, message: "Internal server error" })
        return;
    }
}