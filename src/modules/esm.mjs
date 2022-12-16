import * as path from 'node:path';
import { release, version } from'node:os';
import { createServer } from 'node:http';
import {constants}from'node:fs'
import { fileURLToPath } from 'node:url';
import {readFile,access}from'node:fs/promises'
import'./files/c.js';
const _fileName = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_fileName)
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await access(`${_dirname}\\files\\a.json`,constants.F_OK)
        .then(async ()=>await readFile(`${_dirname}\\files\\a.json`))
        .catch((err)=>console.log(err)) )
} else {
    unknownObject = JSON.parse(await access(`${_dirname}\\files\\b.json`,constants.F_OK)
        .then(async ()=>await readFile(`${_dirname}\\files\\b.json`))
        .catch((err)=>console.log(err)) )
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${_fileName}`);
console.log(`Path to current directory is ${_dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});



