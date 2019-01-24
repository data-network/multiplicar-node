//requires
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./file');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor base ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite ${limite} no es un numero`);
            return;
        }

        let datos = '';

        console.log('=========================='.green);
        console.log(`=====Tabla de ${base}=====`.green);
        console.log('=========================='.green);

        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base*i}\n`;
        }

        if (datos) resolve(datos);
        //else console.error('No hay datos a mostrar');

    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite ${limite} no es un numero`);
            return;
        }

        let datos = '';

        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`.green);
            //console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}