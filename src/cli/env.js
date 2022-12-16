const parseEnv = () => {
    const envObj= process.env
    for(let key in envObj){
        if(key.includes('RSS'))console.log(`${key}=${envObj[key]}`)
    }
};

parseEnv();