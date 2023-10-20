const cpf = '600.567.890-12, 765.998.345-23';

const regex = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/g
console.log(cpf.match(regex));