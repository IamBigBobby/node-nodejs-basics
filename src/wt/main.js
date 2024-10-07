import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const numCPUs = cpus().length;
    const workers = [];
    const results = [];

    for (let i = 0; i < numCPUs; i += 1) {
        const worker = new Worker("./src/wt/worker.js", { workerData: 10 + i });

        worker.on("message", (data) => {
            results.push({ status: "resolved", data });
        });

        worker.on("error", (err) => {
            results.push({ status: "error", data: null });
        });

        workers.push(worker);
    }

    await Promise.allSettled(
        workers.map((worker) => new Promise((result) => worker.on("exit", result)))
      );
      console.log(results);
};

await performCalculations();