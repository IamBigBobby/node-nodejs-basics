import { writeFile, existsSync } from 'fs';

const content = 'I am fresh and young';

const create = async () => {
    try {
        const exists = existsSync('./src/fs/files/fresh.txt');
        if (exists) {
            throw Error('FS operation failed');
        }

        writeFile('./src/fs/files/fresh.txt', content, (error) => {
            if (error) {
                throw Error("FS operation failed");
            }
            console.log("File created");
        });
        
    } catch (error) {
        console.log(error);
        return;
    }
};

await create();
