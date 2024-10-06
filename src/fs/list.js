import { existsSync } from 'fs';
import { readdir, readFile, mkdir, writeFile } from 'fs/promises';
import path from "path";

const list = async () => {
    try{
        const dirPath = './src/fs/files';

        const exists = existsSync(dirPath);

        if(!exists){
            throw Error('FS operation failed')
        }

        const readedFiles = await readdir(dirPath);

        for(const files of readedFiles){
            console.log(files);
        }
    } catch (error) {
        console.log(error);
        return;
    }
};

await list();