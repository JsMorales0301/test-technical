import { NextFunction, Request, Response } from "express";

export class WordsMiddleware {

    validateLettersEmpty = (req: Request, res: Response, next: NextFunction) => {
        const { letters } = req.query;

        if (!letters) {
            return res.status(400).json({ error: 'Letters is required' })
        }

        next();
    }

    validateQtyLetterEmpty = (req: Request, res: Response, next: NextFunction) => {
        const { qtyLetter } = req.query;

        if (!qtyLetter) {
            return res.status(400).json({ error: 'qtyLetter is required' })
        }

        next();
    }

    validateQtyLetterIsNumber = (req: Request, res: Response, next: NextFunction) => {
        const { qtyLetter } = req.query;

        if (isNaN(Number(qtyLetter))) {
            return res.status(400).json({ error: 'qtyLetter must be a number' })
        }

        next();
    }

    validateQuery = (req: Request, res: Response, next: NextFunction) => {
        // Convertimos los valores de query a los tipos adecuados.
        const letters = req.query.letters as string;
        const qtyLetter = parseInt(req.query.qtyLetter as string);
    
        // Validamos que qtyLetter no sea 0.
        if (qtyLetter === 0) {
            return res.status(400).json({ message: "qtyLetter cannot be 0." });
        }

        // Validamos que qtyLetter no supere la longitud de letters.
        if (qtyLetter > letters.length) {
            return res.status(400).json({ message: "qtyLetter cannot exceed the length of letters." });
        }
    
        // Si todo está correcto, pasamos al siguiente middleware o controlador.
        next();
    }


}