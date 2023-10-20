const texto = 'Bom\ndia';
console.log(texto.match(/.../gi));
console.log(texto.match(/..../gi)); // o ponto não engloba o \n

// dotall - algumns linguagens tem uma flag /./s, mas JS Não!
