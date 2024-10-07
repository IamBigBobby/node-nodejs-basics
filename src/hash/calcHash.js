import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';

    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(`SHA256 Hash of ${filePath}: ${hexHash}`);
    });

    stream.on('error', (err) => {
        console.error(`Error reading file: ${err.message}`);
    });
};

await calculateHash();