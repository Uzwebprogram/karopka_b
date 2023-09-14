import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";


@Entity({ name: "Vakansiy" })
export class VakansiyEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_uz: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_en: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_ru: string

    @Column({ type: "varchar", length: 3000 })
    @IsString()
    description_uz: string

    @Column({ type: "varchar", length: 3000 })
    @IsString()
    description_en: string

    @Column({ type: "varchar", length: 3000 })
    @IsString()
    description_ru: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;


    
}