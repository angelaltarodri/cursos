const { exec, spawn } = require('child_process')

// exec('node NODE/Fundamentals/04-errors.js', (err, stdout, sterr) => {
//     if(err){
//         console.log(err)
//         return false;
//     }
    
//     console.log(stdout)
// })

let proceso = spawn('ls', ['-la'])

// console.log(proceso.pid)
// console.log(proceso.connected)

proceso.stdout.on('data', (dato) => {
    console.log('¿Esta muerto?')
    console.log(process.killed)
    // console.log(dato.toString())
})

proceso.on('exit', () => {
    console.log('el proceso termino')
    console.log(proceso.killed)
})