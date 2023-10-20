// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.';
console.log(texto.match(/C|ab/));
// Expressão regular em js vira entre / /
console.log(texto.match(/c|ab/i));
console.log(texto.match(/c|ab/gi));