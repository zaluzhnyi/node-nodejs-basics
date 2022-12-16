import {Worker}from'node:worker_threads'
import {cpus} from 'node:os'
import {fileURLToPath} from 'node:url'
import { dirname } from 'node:path';
const performCalculations = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirname = dirname(_fileName)
    const numCPUs = cpus().length
    const arrayPromises =[]
    for(let i = 0 ;i<numCPUs;i++){
        let promise = new Promise(((resolve, reject) => {
            const worker = new Worker(`${_dirname}\\worker.js`, {
                workerData: i+10
            });
            worker.on('message', value => {
                resolve({ status: 'resolved', data: value });
            });
            worker.on('error', err => {
                resolve({ status: 'error', data: null });
            });
        }))
        arrayPromises.push(promise)
    }
    await Promise.all(arrayPromises).then(data=>console.log(data))

};

await performCalculations();