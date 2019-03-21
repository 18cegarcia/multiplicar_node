
const argv = require('./config/jargs').argv;
const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/listar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
listarTabla(argv.base,argv.limite);
break;
    case 'crear':
            crearArchivo(argv.base,argv.limite)
          .then(archivo => console.log(`arhchivo creado ${archivo}`))
          .catch(err=>console.log((err)));
        break;

    default:
        console.log('comando no reconocido')
}


