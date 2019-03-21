const fs = require ('fs');

let crearArchivo=(base,limite)=>{
    return new Promise((resolve,reject) =>{

        if (!Number(base)){
            reject ('no es un numero');
            return;
        }

        let data ='';
        for (i=1 ; i<=limite ;i++ ) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        fs.writeFile(`archiivos/tabla-${base}`,data,(err)=>{
            if(err) reject (err)
            else
                resolve(`tabla -${base}`);
        });
    });
}
module.exports={
    crearArchivo
}
