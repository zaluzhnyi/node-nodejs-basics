const parseArgs = () => {
    let result=''
   process.argv.slice(2).forEach((el)=>{
       if(el.includes('--')){
           result+= el + ' is '
       }else {
           result+=el+' '
       }
   })

    console.log(result)
};

parseArgs();