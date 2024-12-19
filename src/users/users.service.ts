import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { ManagerError } from '../common/errors/manager.error';
import { BaseService } from '../common/config/base.service';
import { UpdateResult } from 'typeorm';

export class UsersService extends BaseService<UserEntity> {
    private users: UserEntity[] = []

    constructor(){
        super( UserEntity )
    }

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {

        try {
            
            const user = await ( await this.execRepository ).save( createUserDto );
            if( !user ){
                throw ManagerError.conflict("Users not created!");
            }
    
            return user;
        } catch (error) {
            throw error;
        }

    }

    async findAll(): Promise<UserEntity[]> {

        try {
            const users = await (await this.execRepository).find({where: {isActive: true}})

            return users;
        } catch (error) {
            throw error;
        }

    }

    async findOne( id:string ):Promise<UserEntity>{
        try {
            const user = await (await this.execRepository).findOne({where: {id, isActive: true}})
            if( !user ) throw ManagerError.notFound("User not found!");

            return user;
        } catch (error) {
            throw error;
        }
    }

    async update( id:string, updateUserDto: UpdateUserDto  ): Promise<UpdateResult>{
        try {
            const user = await (await this.execRepository).update(id, updateUserDto);
            if( user.affected === 0 ){
                throw ManagerError.notFound("User not found!");
            }
            
            return user;
        } catch (error) {
            throw error;
        }
    }

    async remove( id:string ): Promise<UpdateResult>{
        try {
            const user = await (await this.execRepository).update(id, { isActive: false });

            if( user.affected === 0 ){
                throw ManagerError.notFound("User not found!");
            }
            
            return user;
        } catch (error) {
            throw error;
        }
    }


}