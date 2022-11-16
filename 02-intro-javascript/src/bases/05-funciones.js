// Funciones


const saludar = (name) =>{
    return `Hola, ${name}`
}


const user = () =>({
    id: 311,
    username: "Josefran21"
})

console.log(saludar('Peter'))
console.log(user())


// Tarea
// 1. Transformar a una funcion de flecha
// 2. Retornar un objeto implicito


const getUsuarioActivo = (nombre) =>({
    id: "ABC567",
    username: nombre
})

console.log(getUsuarioActivo("Francisco"))

// function getUsuarioActivo(nombre) {
//     return {
//         id: "ABC567",
//         username: nombre
//     }
// }


// const usuarioActivo = getUsuarioActivo('Francisco')
// console.log(usuarioActivo)