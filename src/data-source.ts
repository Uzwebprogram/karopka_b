import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryEntity } from "./entities/category"
import { ProductsEntity } from "./entities/products"
import { FormEntity } from "./entities/forma"
import { BlogEntity } from "./entities/blog"
import { NewsEntity } from "./entities/news"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "7hEfwjl*OVRL",
    database: "karopka_b", 
    synchronize: true,
    logging: false,
    entities: [CategoryEntity , ProductsEntity , FormEntity , BlogEntity, NewsEntity],
    migrations: [],
    subscribers: [],
})
