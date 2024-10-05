import { writeFile } from 'fs';

const content = 'I am fresh and young';

const create = async () => {
    writeFile('./src/fs/files/fresh.txt', content, (err) => {
        if(err) {
            console.error("FS operation failed");
            return;
        }
        console.log("File created");
    }) 
};

await create();