
let listarTabla=(base,limite)=>{
    return new Promise((resolve,reject) =>{

        if (!Number(base)){
            reject ('no es un numero');
            return;
        }

        let data ='';
        for (i=1 ; i<=limite ;i++ ) {
            console.log(`${base} * ${i} = ${base * i} \n`);
        }
    });
}
module.exports={
    listarTabla
}