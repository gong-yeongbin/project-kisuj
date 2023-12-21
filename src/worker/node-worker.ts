import { parentPort, workerData, threadId } from 'worker_threads';

const { shcode } = workerData;
console.log(`worker[${threadId}] shcode :`, shcode);
parentPort.close();
