function serompe() {
    return 3 + z 
}

function seRompeAsinc(cb){
    setTimeout(() => {
        try {
            return 3 + z
        } catch (error) {
            console.log('Error en mi func asincrona')
            cb(error)
            
        }
    })
}

try {
    // serompe()
    seRompeAsinc(function () {
        console.log('error!')
    })
} catch (error) {
    console.log('vaya algo se ha roto')
    console.log(error)
    console.log('pero no pasa nada lo hemos capturado')
}