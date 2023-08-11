import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { NewsEntity} from '../entities/news';

class UslugyController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(NewsEntity).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.json(await AppDataSource.getRepository(NewsEntity).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title_uz,title_ru , title_en , description_uz,description_ru , description_en , image } = req.body

            const Uslugy = await AppDataSource.getRepository(NewsEntity).createQueryBuilder().insert().into(NewsEntity).values({ title_uz,title_ru , title_en , description_uz,description_ru , description_en  , image }).returning("*").execute()

            res.json({
                status: 201,
                message: "Uslugy created",
                data: Uslugy.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title_uz,title_ru , title_en , description_uz,description_ru , description_en , image  } = req.body
            const { id } = req.params

            const Uslugy = await AppDataSource.getRepository(NewsEntity).createQueryBuilder().update(NewsEntity)
                .set({ title_uz,title_ru , title_en , description_uz,description_ru , description_en  , image  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "Uslugy updated",
                data: Uslugy.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const Uslugy = await AppDataSource.getRepository(NewsEntity).createQueryBuilder().delete().from(NewsEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "Uslugy deleted",
                data: Uslugy.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UslugyController();