import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";


@Entity({ name: "blog" })
export class BlogEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "varchar", length: 1000 })
    @IsString()
    link: string
    
    @Column({ type: "varchar", nullable : true })
    @IsString()
    title_uz: string

    @Column({ type: "varchar", nullable : true })
    @IsString()
    title_en: string

    @Column({ type: "varchar", nullable : true })
    @IsString()
    title_ru: string

    @Column({ type: "varchar" , nullable : true})
    @IsString()
    description_uz: string

    @Column({ type: "varchar" , nullable : true})
    @IsString()
    description_en: string

    @Column({ type: "varchar" , nullable : true})
    @IsString()
    description_ru: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;


    
}