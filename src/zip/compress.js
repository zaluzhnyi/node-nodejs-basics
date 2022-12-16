import {createGzip} from'node:zlib'
import {createReadStream,createWriteStream} from 'node:fs'
import {dirname}from 'node:path';
import { fileURLToPath } from 'node:url';
const compress = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirName = dirname(_fileName)

    const zip = createGzip()
    const readStream = createReadStream(`${_dirName}\\files\\fileToCompress.txt`)
    const writeStream = createWriteStream(`${_dirName}\\files\\archive.gz`)




    readStream.pipe(zip).pipe(writeStream)
    readStream.on('error',(error)=>console.log(error.message))
    zip.on('error',(error)=>console.log(error.message))
    writeStream.on('error',(error)=>console.log(error.message))

};

await compress();