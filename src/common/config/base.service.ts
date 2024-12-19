import { EntityTarget, Repository } from "typeorm";
import { ConfigServer } from "./config-server";
import { BaseEntity } from "./base.entity";

export class BaseService< T extends BaseEntity > extends ConfigServer {
    public execRepository: Promise<Repository<T>>
    
    constructor( private getEntity: EntityTarget<T> ){
        super();
        this.execRepository = this.initRepository( getEntity );
    }

    async initRepository<T extends BaseEntity>( e: EntityTarget<T> ): Promise<Repository<T>>{
        return (await this.dbConnect).getRepository(e);
    }
}