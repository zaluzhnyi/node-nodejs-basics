import {createGunzip} from'node:zlib'
import {createReadStream,createWriteStream} from 'node:fs'
import {dirname}from 'node:path';
import { fileURLToPath } from 'node:url';
import {pipeline} from 'node:stream'
const decompress = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirName = dirname(_fileName)

    const unzip = createGunzip()
    const readStream = createReadStream(`${_dirName}\\files\\archive.gz`)
    const writeStream = createWriteStream(`${_dirName}\\files\\fileToCompress.txt`)



    pipeline(readStream,unzip,writeStream, (error) => {
        if (error) console.log(error.message);
    })
};

await decompress();