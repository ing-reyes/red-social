import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "../../common/config/base.entity";
@Entity({name: "users"})
export class UserEntity extends BaseEntity {

    @Column({type: "varchar"})
    username!:string;
    
    @Column({type: "varchar"})
    email!:string;
    
    @Column({type: "varchar"})
    password!:string;
    
    @Column({type: "varchar"})
    fullName!:string;
    
    @Column({type: "varchar", nullable: true})
    bio?:string;

    @Column({type: "varchar", nullable: true})
    profileImage?:string;
}