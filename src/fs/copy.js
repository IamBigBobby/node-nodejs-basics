import { existsSync } from 'fs';
import { readdir, readFile, mkdir, writeFile } from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';

const copy = async () => {
    
    try {
        const dirPath = './src/fs/files';
        const copyPath = './src/fs/files_copy';

        const exists = existsSync(copyPath);

        if(exists){
            throw Error('files_copy already exist')
        }

        mkdir(copyPath, {recursive: true}, (error) => {
            if (error){
                throw error;
            }
        })

        const readedFiles = await readdir(dirPath);

        for (const file of readedFiles){
            const filePath = path.join(dirPath, file);
            const fileContent = await readFile(filePath);

            const newFilePath = path.join(copyPath, file);
            await writeFile(newFilePath, fileContent);
        }

    } catch (error) {
        console.log(error);
        return;
    }
};

await copy();
