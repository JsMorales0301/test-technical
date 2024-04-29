export interface Word {
    word: string;
}

export interface FileRepository<T> {
    read(): Promise<T>;
}