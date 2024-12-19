import express, { Request, Response } from "express"
import { AppRoutes } from "./routes";
import { envs } from "./common/config/envs";
import { ConfigServer } from "./common/config/config-server";

export class AppServer extends ConfigServer {
    private app = express();
    private port = envs.PORT;

    constructor(){
        super();
        this.dbConnection;
    }

    start() {

        this.app.use( express.json() );
        this.app.use( express.urlencoded({extended:true}) );

        this.app.use( AppRoutes.routes )

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

    get dbConnection(){
        return this.dbConnect
        .then(()=>{
            console.log("Connection Success");
        })
        .catch((err)=>{
            console.log("Error Connection");
        })
        
    }
}