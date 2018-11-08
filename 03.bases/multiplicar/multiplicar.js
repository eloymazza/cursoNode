const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    return new Promise ((resolve, reject) => {
        
        if(!Number(base)){
            reject(`La base proporcionada (${base}) no es valida`);
            return;
        }

        if(!Number(limite) || !(limite > 0 && limite < 100)){
            reject(`El limite proporcionado (${limite}) no es valido`);
            return;
        }

        let resultString = `Tabla de multiplicar del ${base}:`;

        for (let i = 1; i <= limite ; i++) {
            resultString += `\n${base} por ${i} es ${base*i} `;
        }

        resolve(resultString);

    });

}

let crearArchivo = (base, limite = 10) => {

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
    crearArchivo,
    listarTabla
}