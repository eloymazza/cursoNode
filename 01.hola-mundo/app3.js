console.log("Inicio del programa");

setTimeout(function() {
    console.log('Primer Timeout');
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout')
}, 0);

setTimeout(() => {
    console.log('Tercer Timeout')
}, 0);

console.log('Fin del porograma');