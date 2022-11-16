// Desestructuracion

const person = {
    name: "Peter",
    age: 18,
    key : "Spider-man"
}

// const {name,age,key} = person

// console.log(name)
// console.log(age)
// console.log(key)


const useContext = ({key,name,age,rango = "Novato"}) =>{
    //console.log(name,age,rango)
    return {
        nombreClave : key,
        anios : age,
        latlng: {
            lat: 14.123,
            lng: -12.3232
        }
    }
}


const {nombreClave, anios, latlng: {lat, lng}} = useContext(person)

console.log(nombreClave,anios)
console.log(lat,lng)