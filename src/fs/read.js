import {constants}from'node:fs'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import {readFile,access}from'node:fs/promises'
const read = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirname = dirname(_fileName)
    try {
        if(await access(`${_dirname}\\files`,constants.F_OK).catch(()=>true)){
            throw new Error('FS operation failed')
        }else{
            const contents = await readFile(`${_dirname}\\files\\fileToRead.txt`, { encoding: 'utf8' });
            console.log(contents);
        }
    }catch (error) {
        console.log(error.message)
    }
};

await read();