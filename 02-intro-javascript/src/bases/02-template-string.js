// Template String

const name = 'Francisco'
const surname = 'Saavedra'

const fullName = `${name} ${surname}`

console.log(fullName)


const saludo = (name) =>{
    return `hola ${name}`
}

console.log(`Este es un texto: ${saludo(name)}`)