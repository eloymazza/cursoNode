const fs = require('fs');


let crearArchivo = (base, limite) => {

    return new Promise ( (resolve, reject) => {

            
        if(!Number(base)){
            reject('El parametro dado no es un numero');
            return;
        }

        let resultString = `Tabla de multiplicar del ${base}:` ;

        for (let i = 1; i <= limite ; i++) {
            resultString +=  `\n${base} por ${i} es ${base*i} `;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, resultString, (err) => {
            if (err) {
                reject(err);
            }
            else{
                resolve(`tabla-${base}.txt`)
            }
        });

    });

} 

module.exports = {
    crearArchivo
}