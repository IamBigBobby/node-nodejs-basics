import { existsSync } from 'fs';
import { rm } from 'fs/promises';

const remove = async () => {
    try{
        const pathDeletedFile = './src/fs/files/fileToRemove.txt'
        const existPathDeletedFile = existsSync(pathDeletedFile);

        if(!existPathDeletedFile){
            throw Error('FS operation failed')
        }

        await rm(pathDeletedFile);
    } catch (error){
        console.log(error)
        return;
    }
};

await remove();