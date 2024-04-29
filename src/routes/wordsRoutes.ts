import { Router } from "express";
import { WordsController } from '../controllers/wordsController';
import { WordsMiddleware } from '../middlewares/wordsMiddleware';

export const router = Router();


const wordsMiddleware = new WordsMiddleware()
const wordsController = new WordsController();

router.get('/search', [
    wordsMiddleware.validateLettersEmpty, 
    wordsMiddleware.validateQtyLetterEmpty,
    wordsMiddleware.validateQtyLetterIsNumber,
    wordsMiddleware.validateQuery
], wordsController.searchWords)