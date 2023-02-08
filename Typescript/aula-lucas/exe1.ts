type Person = {
    name: string,
    birth: Date,
    gender: string
}

const Marcia: Person = {
    name: 'Marcia',
    birth: new Date('12/02/1996'),
    gender: 'FEMALE'
}

const Raquel: Person = {
    name: 'Raquel',
    birth: new Date('08/02/1997'),
    gender: 'FEMALE'
}

//exercicio 2

const ageComparing = (person1: Person, person2: Person) => {
    let birth1 = person1.birth.getTime()
    let birth2 = person2.birth.getTime()

    return console.log(birth1 < birth2 ? `${person1.name} eh mais velha que ${person2.name}` : `${person2.name} eh mais velha que ${person1.name}`)
}

//console.log(ageComparing(Marcia, Raquel))

//exercicio 3
//ask for help

//exercicio 4

function receving (item: string | number): number{
    if(typeof item === 'string'){
        return item.length
    } else{
        return item
    }
}
//console.log(receving(100))

//exercicio 5

type ArgProps = string | boolean

type ReturnProps = 'True' | 'False'

function valentine (item: ArgProps): string{
    if(typeof item === 'string') return 'Input is not a boolean'
    return item ? 'True' : 'False'
} 

//console.log(valentine(true))

//exercicio 6

/* Crie uma função que recebe um union type de array de strings e números e retorna um novo array contendo apenas as strings. Caso não tenha nenhuma string, deverá retornar um array vazio. */

type ArrayProps = Array<string | number>

function redfield(item: ArrayProps): Array<string>{
    const newArray = item.filter(value => typeof value === 'string') as Array<string>
    return newArray
}

let vetor:ArrayProps = [1,2,3,4,'a','z','cool']

console.log(redfield(vetor))