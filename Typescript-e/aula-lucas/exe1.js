var Marcia = {
    name: 'Marcia',
    birth: new Date('12/02/1996'),
    gender: 'FEMALE'
};
var Raquel = {
    name: 'Raquel',
    birth: new Date('08/02/1997'),
    gender: 'FEMALE'
};
//exercicio 2
var ageComparing = function (person1, person2) {
    var birth1 = person1.birth.getTime();
    var birth2 = person2.birth.getTime();
    return console.log(birth1 < birth2 ? "".concat(person1.name, " eh mais velha que ").concat(person2.name) : "".concat(person2.name, " eh mais velha que ").concat(person1.name));
};
//console.log(ageComparing(Marcia, Raquel))
//exercicio 3
//ask for help
//exercicio 4
function receving(item) {
    if (typeof item === 'string') {
        return item.length;
    }
    else {
        return item;
    }
}
function valentine(item) {
    if (typeof item === 'string')
        return 'Input is not a boolean';
    return item ? 'True' : 'False';
}
function redfield(item) {
    var newArray = item.filter(function (value) { return typeof value === 'string'; });
    return newArray;
}
var vetor = [1, 2, 3, 4];
console.log(redfield(vetor));
