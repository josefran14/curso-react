// Import y Export


import heroes , {owner} from "../data/heroes"

console.log(owner)
 const getHeroById = (id) =>{
    return heroes.find((item) => item.id === id)
 }

 console.log(getHeroById(2))


const getHeroByOwner = (owner) =>{
    return heroes.filter((item) => item.owner === owner)
}

console.log(getHeroByOwner("DC"))