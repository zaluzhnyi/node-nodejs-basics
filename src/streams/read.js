import {createReadStream} from 'node:fs'
import {dirname}from 'node:path';
import { fileURLToPath } from 'node:url';
import {stdout}from 'node:process'


const read = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirName = dirname(_fileName)
    const readStream = createReadStream(`${_dirName}\\files\\fileToRead.txt`)
    readStream.pipe(stdout)
    readStream.on('error',(error)=>console.log(error.message))
};

await read();