console.log('Algo')
console.info('Algo')
console.error('Algo')
console.table([{
    a:1, b: 'Z'
}, {
    a: 2, b: 'Y'
}])


console.group('conver')
console.log('Hola')
console.group('conver')
console.log('Blablalba')
console.groupEnd('conver')
console.log('Adios')
console.groupEnd('conver')
console.log('Otras cosas de otra funcion')

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')