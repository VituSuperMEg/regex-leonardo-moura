const telefone = '(11) 98756-1212,98765-4321';

const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g;

console.log(telefone.match(regex))