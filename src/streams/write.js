import {createWriteStream} from 'node:fs'
import {dirname}from 'node:path';
import { fileURLToPath } from 'node:url';
import {stdout,stdin}from 'node:process'
const write = async () => {
    const _fileName = fileURLToPath(import.meta.url)
    const _dirname = dirname(_fileName)
    const writeStream =createWriteStream(`${_dirname}\\files\\fileToWrite.txt`)
    stdout.write(`Введите текст для добавления(по нажатию клавиши Enter) в файл (Выйти из процесса Ctrl+C): `)
    stdout.end()
    stdin.pipe(writeStream)
    writeStream.on('error',(error)=>console.log(error.message))

};

await write();