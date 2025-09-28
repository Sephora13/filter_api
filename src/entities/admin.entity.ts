import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administrateur{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    admin: string

    @Column()
    login: string

    @Column()
    password: string

}