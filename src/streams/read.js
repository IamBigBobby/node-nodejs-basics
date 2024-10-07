import fs from 'fs';

const read = async () => {
    const filePath = 'src/streams/files/fileToRead.txt';
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        console.log('\nFinished reading the file.');
    });

    readStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });
};

await read();