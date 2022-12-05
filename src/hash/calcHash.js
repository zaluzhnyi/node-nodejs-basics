import {dirname}from 'node:path';
import { fileURLToPath } from 'node:url';
import {access,readFile} from 'node:fs/promises';
import {constants} from 'node:fs';
import {createHash} from 'node:crypto';
const calculateHash = async () => {
    try {
        const _fileName = fileURLToPath(import.meta.url)
        const _dirName = dirname(_fileName)
        const filePath =`${_dirName}\\files\\fileToCalculateHashFor.txt`
        const hash =createHash('sha256')
         access(filePath,constants.F_OK)
            .then(()=>{
               readFile(filePath, { encoding: 'utf8' })
                   .then((content)=>{
                        hash.update(content)
                        console.log(`${hash.digest('hex')}`)
                   });
            })
    }
    catch (error) {
        console.log(error.message)
    }
};

await calculateHash();