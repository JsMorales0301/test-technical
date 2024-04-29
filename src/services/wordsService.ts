import { FileRepositoryImpl } from "../repositories/fileRepositoryImpl";

export class WordsService {

    constructor() { }

    searchWords = async (letters: any, qtyLetter: any) => {
        const fileRepository = new FileRepositoryImpl();
        try {
            const words = await fileRepository.read();

            const qty = parseInt(qtyLetter);

            const incomingWord = letters.toLowerCase().replace(/\r/g, '');
            const incomingwordSet = new Set(incomingWord.toLowerCase().replace(/[^a-z]/g, ''));
            const matchingWords = words.filter((word: any) => {
                if (word.length !== qty) {
                    return false;
                }

                const dicWordSet = new Set(word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, ""));
                for (const letter of dicWordSet) {
                    if (!incomingwordSet.has(letter)) {
                        return false;
                    }
                }
                return true;
            });

            if (matchingWords.length === 0) {
                return { success: true, message: "No words found with the specified query." };
            }

            const formattedResponse = matchingWords.map((word: any) => ({ word }));

            return { success: true, data: formattedResponse };
        } catch (error: unknown) {
            if (error instanceof Error) {
                return { success: false, message: error.message };
            } else {
                return { success: false, message: "An unexpected error occurred" };
            }
        }
    }


}