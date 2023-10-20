const texto = '1,2,3,4,5,6,a.b c!d?e]f';

console.log(texto.match(/\d/g)); // são os numeros
console.log(texto.match(/\D/g)); // não sao numeros


console.log(texto.match(/\w/g)); // caracetes

console.log(texto.match(/\s/g)); // espaço [\t\n\r\f]
console.log(texto.match(/\S/g)); // espaço [^\t\n\r\f]