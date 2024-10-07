import fs from 'fs';

const write = async () => {
    const filePath = 'src/streams/files/fileToWrite.txt';
    const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });

    console.log('Please enter text (Ctrl+C to exit):');

    process.stdin.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Finished writing to the file.');
    });

    writeStream.on('error', (error) => {
        console.error('Error writing to the file:', error);
    });
};

await write();