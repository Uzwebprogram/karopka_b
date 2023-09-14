import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { VakansiyEntity} from '../entities/vakansiy';

class VakansiyController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(VakansiyEntity).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.json(await AppDataSource.getRepository(VakansiyEntity).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title_uz,title_ru , title_en , description_uz,description_ru , description_en  } = req.body

            const Vakansiy = await AppDataSource.getRepository(VakansiyEntity).createQueryBuilder().insert().into(VakansiyEntity).values({ title_uz,title_ru , title_en , description_uz,description_ru , description_en   }).returning("*").execute()

            res.json({
                status: 201,
                message: "Vakansiy created",
                data: Vakansiy.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title_uz,title_ru , title_en , description_uz,description_ru , description_en   } = req.body
            const { id } = req.params

            const Vakansiy = await AppDataSource.getRepository(VakansiyEntity).createQueryBuilder().update(VakansiyEntity)
                .set({ title_uz,title_ru , title_en , description_uz,description_ru , description_en    })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "Vakansiy updated",
                data: Vakansiy.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const Vakansiy = await AppDataSource.getRepository(VakansiyEntity).createQueryBuilder().delete().from(VakansiyEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "Vakansiy deleted",
                data: Vakansiy.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new VakansiyController();