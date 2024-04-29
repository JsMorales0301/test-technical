import { FileRepository, Word } from './fileRepository';
import { promises as fs } from 'fs';

export class FileRepositoryImpl implements FileRepository<string[]> {
    async read(): Promise<string[]> {
        
        let data: string = ''

        try {
            data = await fs.readFile('C:/Users/JOAN MORALES/Desktop/test-technical/src/storage/words.txt', 'utf-8')
        } catch (error) {
            throw new Error('Failed to read file. Make sure the file path is correct and the file is accessible.')
        }
        
        return data.replace(/\r/g, '').split('\n');
    }
}