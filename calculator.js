function soma(a, b)  {
    console.log("soma a:", a);
    console.log("soma b:", b);
    return a + b; 
}
    
function subtracao(a, b)  {
    console.log("subtração a:", a);
    console.log("subtração b:", b);
    return a - b;    
} 
    
function multiplicacao(a, b)  {
    console.log("multiplicação a:", a);
    console.log("multiplicação b:", b);
    return a * b;    
}
    
function divisao(a, b)  {
    console.log("divisão a:", a);
    console.log("divisão b:", b);
    return a / b;
}
    
function calcular()  {
    const resultadoSoma = soma(2, 2);
    console.log("Resultado da soma", resultadoSoma);
    
    const resultadoSubtracao = subtracao(2, 2);
    console.log("Resultado da subtração", resultadoSubtracao);
    
    const resultadoMultiplicacao = multiplicacao(2, 2);
    console.log("Resultado da multiplicação", resultadoMultiplicacao);
    
    const resultadoDivisao = divisao(2, 2);
    console.log("Resultado da divisão", resultadoDivisao);
}
   
calcular();
    