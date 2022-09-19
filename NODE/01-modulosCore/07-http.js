const http =  require('http')

const router = (req, res) => {
    console.log('Nueva petición')
    console.log(req.url)

    switch(req.url){
        case '/hola':
            let saludo = hola()
            res.write(saludo)
            res.end()
            break
        default:
            res.write('Error 404: No sé lo que quieres chavo')
            res.end()
    }
    
    res.writeHead(201, { 'Content-Type' : 'text/plain' })

    // escribir respuesta al usuario
    // res.write('Hola, ya se usar http de NODE JS')
}

http.createServer(router).listen(3000)

console.log('Escuchando http en el puerto 3000')

function hola () {
    return 'Hola, qué tal?'
}