import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import {access,cp} from 'node:fs/promises'
import {constants} from 'node:fs'
const copy = async () => {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = dirname(_filename);
    try{
        if(await access(`${_dirname}\\files`,constants.F_OK).catch(()=>true)){
            throw new Error('FS operation failed')
        }else if(await access(`${_dirname}\\files_copy`,constants.F_OK)
            .then(()=>true)
            .catch(()=>false)
        ){
            throw new Error('FS operation failed')
        }else {
            cp(`${_dirname}\\files`,`${_dirname}\\files_copy`,{recursive:true})
        }

    }
    catch (error){
    console.log(error.message)
    }
};

copy();