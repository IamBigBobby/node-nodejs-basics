import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const fileToDeCompress = 'src/zip/files/archive.gz';
    const outputFile = 'src/zip/files/fileToCompressAfterDecompress.txt';

    const readStream = fs.createReadStream(fileToDeCompress);
    
    const writeStream = fs.createWriteStream(outputFile);

    const gunzip = zlib.createGunzip();

    readStream
        .pipe(gunzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('File successfully decompressed to ' + outputFile);
        })
        .on('error', (err) => {
            console.error('Error during decompression:', err);
        });
};

await decompress();