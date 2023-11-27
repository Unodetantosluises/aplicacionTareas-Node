const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
    
    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una Opcion '.green);
    console.log('======================='.green);

    console.log(`${ '1.'.green } Crear Tarea`);
    console.log(`${ '2.'.green } Lista de Tareas`);
    console.log(`${ '3.'.green } Lista de Tareas Completadas`);
    console.log(`${ '4.'.green } Lista de Tareas Pendientes`);
    console.log(`${ '5.'.green } Completar Tarea(s)`);
    console.log(`${ '6.'.green } Borrar Tarea`);
    console.log(`${ '0.'.green } Salir \n`);

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readLine.question('Seleccione una accion: ', (opt) => {
        readLine.close();
        resolve(opt);
    })
})
}

const pausa = () => {

    return new Promise( resolve => {

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(`\n Presione ${ 'ENTER'.green } para continuar`, (opt) => {
        readLine.close();
        resolve(opt);
    })
});
}

module.exports = {
    mostrarMenu,
    pausa
}
