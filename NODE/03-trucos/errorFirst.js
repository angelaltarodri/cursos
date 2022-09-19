function asincrona(callback){
    setTimeout(() => {
        try {
            let a = 3 +z
            callback(null, a)
        } catch (error) {
            callback(error)
        }   
    }, 1000)
}
try {
    asincrona((err, dato)=>{
        if(err){
            console.error('Tenemos un error')
            console.error(err)
            // throw err EN FUNCIONES ASINCRONAS NO VA A FUNCIONAR
            return false
        }
    
        console.log('Todo ha ido bien, mi data es ', dato)
    })
} catch (error) {
    console.error('Hemos capturado un error')
    console.error(error)
}
