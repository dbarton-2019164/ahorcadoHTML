function enviarDatos(){
    const nombre = document.getElementById('nombre').value;

    enviarDatosAlServidor(nombre)
        .then(mensajeDeAgradecimiento)
        .catch(mensajeError);
}


function enviarDatosAlServidor(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = (nombre.toLowerCase() !== 'error');

            if(exito){
                resolve('Bienvenido al sistema');
            }else{
                reject('Acceso denegado');
            }
        }, 2000);
    });
}

function mensajeDeAgradecimiento(mensaje){
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.textContent = mensaje;
    mensajeElement.classList.remove('oculto') // Elimino la clase asignada desde html del css
}

function mensajeError(error){
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.textContent = error;
    mensajeElement.classList.remove('oculto');
}