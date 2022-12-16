import {constants}from'node:fs'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import {readdir,access}from'node:fs/promises'
const list = async () => {
  const _fileName = fileURLToPath(import.meta.url)
  const _dirname = dirname(_fileName)
    try {
        if(await access(`${_dirname}\\files`,constants.F_OK).catch(()=>true)){
            throw new Error('FS operation failed')
        }else{
            const files = await readdir(`${_dirname}\\files`);
            for (const file of files)
                console.log(file);
        }
    }catch (error) {
      console.log(error.message)
    }
};

await list();