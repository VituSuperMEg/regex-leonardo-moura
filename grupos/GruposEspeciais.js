const texto  = 'João é calmo, mas no transisto fica nervoso';

console.log(texto.match(/[\wÀ-ú]+/g))

// Positive lookahead 
console.log(texto.match(/[\wÀ-ú]+(?=,)/g))

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/g))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/g))