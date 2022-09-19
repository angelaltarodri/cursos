const process = require('process')


process.on('beforeExit', () => {
    console.log('El proceso va a terminar.')
})
process.on('exit', () => {
    console.log('El proceso terminó.')
})

process.on('')

process.on('uncaughtException', (err, origen) => {
    console.log('Vaya, se nos ha olvidado capturar un error')
    // console.error(err)
    setTimeout(() => {
        console.log('Esto viene desde las excepciones')
    }, 0)
}) 

// process.on('uncaughtRejection') // para promesas que se han rechazado y no hay un catch

funcionQueNoExiste()

console.log('Esto si ele rror no se recoge, no sale ')