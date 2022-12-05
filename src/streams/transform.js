import {Transform}from'node:stream'
import {stdout,stdin}from 'node:process'
const transform = async () => {
    class ReverseTransform extends Transform{
        constructor(options={}) {
            options = Object.assign({},options,{
                decodeStrings:false
            })
            super(options);
        }
        _transform(chunk,encoding,callback){
            if(encoding!=='utf8'){
                this.emit('error',new Error('Only utf-8'))
                return callback()
            }else {
                this.push([...chunk].reverse().join(""));
                callback()
            }
        }
    }
    const reverseTransform = new ReverseTransform()
    stdin.setEncoding("utf8")
    stdout.write(`Введите текст для трансформации(по нажатию клавиши Enter)(Выйти из процесса Ctrl+C):`)
    stdin.pipe(reverseTransform).pipe(stdout)
    stdout.on('error',(error)=>console.log(error.message))
    stdin.on('error',(error)=>console.log(error.message))
    reverseTransform.on('error',(error)=>console.log(error.message))
};

await transform();