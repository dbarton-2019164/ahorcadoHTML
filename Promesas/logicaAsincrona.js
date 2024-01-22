async function enviarDatos(){
    const nombre = document.getElementById('nombre').value;

    try{
        const resultado = await enviarDatosAlServidor(nombre);
        mensajeDeAgradecimiento(resultado+' '+nombre);
    }catch(e){
        mensajeError(e);
    }
}


function enviarDatosAlServidor(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = (nombre.toLowerCase() !== 'error');

            const resultado = exito ? 'Bienvenido al sistema' : 'Datos erroneos';
            exito ? resolve(resultado) : reject(resultado);
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