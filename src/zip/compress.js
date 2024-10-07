import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const fileToCompress = 'src/zip/files/fileToCompress.txt';
    const outputArchive = 'src/zip/files/archive.gz';

    const readStream = fs.createReadStream(fileToCompress);
    
    const writeStream = fs.createWriteStream(outputArchive);

    const gzip = zlib.createGzip();
    
    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('File successfully compressed to ' + outputArchive);
        })
        .on('error', (error) => {
            console.error('Error during compression:', error);
        });
};

await compress();