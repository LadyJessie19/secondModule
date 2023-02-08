/* Dado um array de números inteiros, crie uma função que retorne um novo array com todos os números pares do array original, ordenados em ordem crescente. Além disso, cada número par deve ser elevado ao quadrado antes de ser adicionado ao novo array. */

const array = ['a', '2', 'r', 'cool']

type Strings = Array<string>

function removeSame (item: Strings): Strings{
    return item.filter((value, index) => item.indexOf(value) === index)
}

//easyest way

function easyRemoveSame(item: Strings): Strings{
    return [...new Set(item)]
}

//I didn`t get it

function reduceRemoveSame(item: Strings): Strings{
    return item.reduce((acumulado, atual) => acumulado.includes(atual) ? acumulado : [...acumulado, atual] , [] as Strings)
}

/* ======================= */
/* Exercicio 8*/
/* ======================= */

const string = 'the brown lazy cat jumps over someone'

const vowels = ['a', 'e', 'i', 'o', 'u']

function checkVowels(item: string): number{
    return item.split('').filter(item => vowels.includes(item)).length
}

/* vou anotar. Eh pra garantir que quando essa interface for implementada seja obrigatorio a ter todos os metodos
Pelo q entendi é um jeito do TS impedir a gente de esquecer alguma propriedade que deveria conter nessa classe */

interface IOperations{
    add: (a: number, b:number) => number
    sub: (a: number, b:number) => number
    div: (a: number, b:number) => number
    mult: (a: number, b:number) => number
}

class Operations implements IOperations{
    add (a: number, b:number): number{
        return a + b
    }
    sub (a: number, b:number): number{
        return a - b
    }
    div (a: number, b:number): number{
        return a / b
    }
    mult (a: number, b:number): number{
        return a * b
    }
}

console.log(Operations.add(1, 3))