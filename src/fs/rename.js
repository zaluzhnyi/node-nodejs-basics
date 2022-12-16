import {constants}from'node:fs'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import * as fs from 'node:fs/promises'
const rename = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirname = dirname(_fileName)
    try{
    if(await fs.access(`${_dirname}\\files\\wrongFilename.txt`,constants.F_OK).catch(()=>true)){
        throw new Error('FS operation failed')
    }else if(await fs.access(`${_dirname}\\files\\properFilename.md`,constants.F_OK)
        .then(()=>true)
        .catch(()=>false)
    ){
        throw new Error('FS operation failed')
    }else {
        fs.rename(`${_dirname}\\files\\wrongFilename.txt`,`${_dirname}\\files\\properFilename.md`)
    }
    }
    catch (error){
    console.log(error.message)
    }
};

await rename();