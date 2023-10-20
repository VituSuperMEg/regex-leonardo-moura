const email = 'fulano@cod3r.com.br, xico@gmail.com';

console.log(email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g));
// com shorthand
console.log(email.match(/\w+@\w+\.\w{2,4}/g));
