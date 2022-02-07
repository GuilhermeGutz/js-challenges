// variavel minha idade
const myAge = 23
 
// variavel dos dois primeiros anos pois os dois primeiros anos contam-se 10.5 years dogs
let earlyYears = 2
 
// operacao de multiplicacao e atribuicao do resultado a ele mesmo
earlyYears *= 10.5
 
// valor nao calculado da idade 
let laterYears = myAge - 2
 
// operacao de multiplicacao e atribuicao do resultado a ele mesmo
laterYears *= 4
 
console.log(earlyYears)
console.log(laterYears)
 
// soma da idade dos dois primeiros anos + a idade calculada posterior a isso
let myAgeInDogYears = earlyYears + laterYears
 
// atribuido meu nome no metodo .toLowerCase(),  O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo.
const myName = "Guilherme Gutz".toLowerCase()
 
console.log(`My name is ${myName}. 'I am ' ${myAgeInDogYears} years old in dog years.`)
