const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = 2;

//console.log(process);
//console.log(process.argv);
//let arg2 = process.argv;

// let param = arg[2];
// let base = param.split('=')[1];

// console.log(argv);

let cmd = argv._[0];
switch (cmd) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(result => {
                console.log('Listando la tabla\n');
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('comando no reconocido');
        break;
}
// console.log(argv.base);
// console.log(arg2);

// crearArchivo(base)
//     .then((archivo) => {
//         console.log(`Archivo creado: ${archivo}`);
//     }).catch((err) => {
//         console.log(err);
//     });