import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
 @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  country: string;

  @Column()
  profession: string;

  @Column()
  languages: string;

  @Column()
  interests: string;

  @Column()
  socialLinks: string;

  @Column()
  bio: string;
}