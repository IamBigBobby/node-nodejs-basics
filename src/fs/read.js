import { existsSync } from 'fs';
import { readFile } from 'fs/promises';

const read = async () => {
    try{
        const dirPathToRead = './src/fs/files/fileToRead.txt';

        const exists = existsSync(dirPathToRead);

        if(!exists){
            throw Error('FS operation failed')
        }

        const fileContent = await readFile(dirPathToRead, 'utf-8');

        console.log(fileContent);
    } catch (error) {
        console.log(error);
        return;
    }
};

await read();