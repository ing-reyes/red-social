import { DataSource } from "typeorm";
import { AppDS } from "./data.source";

export class ConfigServer {
    get dbConnect(): Promise<DataSource>{
        return AppDS.initialize();
    }
}