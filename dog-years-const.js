/// variavel minha idade
const myAge = 23
// variavel dos dois primeiros anos pois os dois primeiros anos contam-se 10.5 years dogs
const earlyYears = 2
// variavel anos de cachorro apos dois anos humanos
const humanDogEarlyYears = earlyYears * 10.5
// valor nao calculado da idade
const laterYears = myAge - earlyYears
// valor da diferença dos 2 primeiros anos multiplicado por 4
const humanDogLaterYears = laterYears * 4
 
const myAgeInDogYears = laterYears + earlyYears

console.log(earlyYears)
console.log(laterYears)
 
// atribuido meu nome no metodo .toLowerCase(),  O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo.
const myName = "Guilherme Gutz".toLowerCase()

console.log(`My name is ${myName}. 'I am ' ${myAgeInDogYears} years old in dog years.`)
