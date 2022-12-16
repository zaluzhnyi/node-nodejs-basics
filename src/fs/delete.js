import {constants}from'node:fs'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import {unlink,access}from'node:fs/promises'
const remove = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirname = dirname(_fileName)
    try{
        if(await access(`${_dirname}\\files\\fileToRemove.txt`,constants.F_OK).catch(()=>true)){
            throw new Error('FS operation failed')
        }
        else{
            unlink(`${_dirname}\\files\\fileToRemove.txt`)
        }
    }
    catch (error) {
        console.log(error.message)
    }
};

await remove();