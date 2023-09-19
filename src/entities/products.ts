import { isString, IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "./category";

@Entity({ name: "products" })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" , nullable : true })
    @IsString()
    title_uz: string

    @Column({ type: "varchar" , nullable : true })
    @IsString()
    title_ru: string

    @Column({ type: "varchar" , nullable : true })
    @IsString()
    title_en: string

    @Column({ type: "text"})
    @IsString()
    description_uz: string

    @Column({ type: "text"})
    @IsString()
    description_ru: string

    @Column({ type: "text"})
    @IsString()
    description_en: string
    @Column({ type: "text"})
    @IsString()
    number: string
    @Column({ type: "text", nullable : true })
    @IsString()
    image: string
    @Column({ type: "text", nullable : true })
    @IsString()
    image2: string
    @Column({ type: "text", nullable : true })
    @IsString()
    image3: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(()=>CategoryEntity,(category)=>category.products)
    category:CategoryEntity

}