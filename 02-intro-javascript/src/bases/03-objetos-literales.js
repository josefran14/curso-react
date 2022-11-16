// Objetos literales

const person = {
    name: "Tony",
    lastname: "Stark",
    age: 45,
    direccion: {
        city: "New York",
        zip: 353421,
        lat: 14.3232,
        lng: 34.98765423
    }
}
//console.table(person)

const person2 = {...person}
person2.name = "Peter",
person2.lastname = "Parker",
person2.age = 18

console.log(person)
console.log(person2)