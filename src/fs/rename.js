import { existsSync } from 'fs';
import { rename as fsRename } from 'fs/promises';

const rename = async () => {
    try{
        const oldPath = './src/fs/files/wrongFilename.txt'
        const newPath = './src/fs/files/properFilename.md'

        const existsOldPath = existsSync(oldPath);
        const existsNewPath = existsSync(newPath);

            if(existsNewPath || !existsOldPath){
                throw Error('FS operation failed')
            }

        await fsRename(oldPath, newPath)
    } catch (error) {
        console.log(error)
        return;
    }
};

await rename();