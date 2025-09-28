import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Publication {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    author: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    filepath: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    likes: number;

    @Column()
    comments: number;   

    @Column()
    dislikes: number;
}