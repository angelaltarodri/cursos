const fs = require('fs')

function leer (ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString())
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err)=>{
        if(err){
            console.log('No he podido escribirlo '+ err)
        } else {
            console.log('Se ha escrito correctamente.')
        }
    })
}

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb)
}

// escribir(__dirname + '/archivo2.txt', 'Soy un archivo nuevo PERO QUE páso', console.log )
// leer(__dirname + '/archivo.txt')
borrar(__dirname + '/archivo1.txt', console.log)