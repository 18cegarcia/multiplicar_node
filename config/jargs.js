const  opts ={
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}

const argv = require('yargs')
    .command('crear','crea el archivo en consola la tabla de multiplicar',opts)
    .command('listar','imprime el resultado',opts)
    .help()
    .argv;

module.exports ={
    argv
};