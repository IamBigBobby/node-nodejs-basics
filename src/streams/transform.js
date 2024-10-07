import { Transform, pipeline } from 'stream';

const transform = async () => {
    console.log('Please enter text (Ctrl+C to exit):');

    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            callback(null, reversed);
        }
    });

    pipeline(process.stdin, reverseStream, process.stdout, (err) => {
        if (err) {
            console.error('Pipeline error:', err);
        } else {
            console.log('\nFinished processing the input.');
        }
    });
};

await transform();