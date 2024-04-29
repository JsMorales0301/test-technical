import { Request, Response } from "express";
import { WordsService } from "../services/wordsService";

export class WordsController {

    constructor() {}

    searchWords = async (req: Request, res: Response) => {
        const { letters, qtyLetter } = req.query;

        const wordsService = new WordsService();
        const result = await wordsService.searchWords(letters, qtyLetter);

        if(!result.success){
            return res.status(500).json({ error: result.message })
        }

        res.json(result)
    }

}