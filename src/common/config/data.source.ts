import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { envs } from "./envs";

export const TypeORMConfig:DataSourceOptions = {
    type: "postgres",
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    database: envs.DB_NAME,
    entities: [ __dirname + "./../../**/*.entity{.ts,.js}" ],
    migrations: [ __dirname + "./../../migrations/*{.ts,.js}" ],
    synchronize: false,
    migrationsRun: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
}

export const AppDS = new DataSource( TypeORMConfig );