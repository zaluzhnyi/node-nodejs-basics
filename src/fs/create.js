import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import {access,writeFile} from 'node:fs/promises'
import {constants} from 'node:fs'


const create = async () => {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = dirname(_filename);
    try{
     await access(`${_dirname}\\files\\fresh.txt`,constants.F_OK)
        throw  new TypeError('FS operation failed')
    }catch (e) {
        if(e.message.includes(' no such file or directory')){
            writeFile(`${_dirname}\\files\\fresh.txt`,'I am fresh and young')
        }else{
            console.log(e.message)
        }
    }

};

await create();