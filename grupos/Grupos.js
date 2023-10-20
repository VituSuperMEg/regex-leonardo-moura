const text1 = 'O José Simão é muito engraçado...hehehehe';
console.log(text1.match(/(he)+/g));

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag';
console.log(texto2.match(/(htttp:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));