// Descrição: Script para a calculadora
/**
 * Neste exercício você deverá implementar a lógica de uma calculadora (com JS).
 * Para isso é provido um conjunto de arquivos-base e você deverá trabalhar no somente
 * no arquivo "script.js". Ele contém comentários indicando o que deve ser feito, mas vocês
 * são livres para modificar e adotar uma estrutura própria.
 *
 * A calculadora deve possuir as seguintes funcionalidades:
 * - Adição de números
 * - Subtração de números
 * - Multiplicação de números
 * - Divisão de números
 * - Limpar o visor
 * - Inverter o sinal do número
 * - Deletar o último caractere
 * - Exibir o resultado da operação
 * - Evitar que o usuário digite dois operadores seguidos
 * - Evitar que o usuário digite um operador no início da operação
 * - Evitar que o usuário divida um número por zero
 * - Evitar que o usuário digite mais de um ponto em um número
 * - Evitar que o usuário digite mais de um zero no início de um número
 * - Evitar que o usuário digite mais de um operador no início da operação
 * - Evitar que o usuário digite mais de um operador no final da operação
 */

// Declaração de variáveis globais:
// - elementoResultado: representa o visor da calculadora
// - botaoAC: botão que limpa o visor
// - botaoMaisMenos: botão que inverte o sinal do número
// - botaoDeletar: botão que deleta o último caractere
// - botoesPadroes: botões que representam os números e operadores da calculadora
// - botaoResultado: botão que exibe o resultado da operação
// Dica 1: Utilize o método querySelector para selecionar os elementos do HTML pelo nome da classe

const resultado = document.querySelector('.js-resultado');
const botoes = document.querySelectorAll('.js-btn-padroes');
const btnAC = document.querySelector('.js-btn-ac');
const btnDEL = document.querySelector('.js-btn-del');
let operation;
// Função que adiciona um número ou operador ao visor da calculadora
//TODO: Implemente a lógica da função
function print(value){
    if(resultado.value == 0){
        resultado.value = value
    }else{
        resultado.value += value; 
    }
}

function validarEPrint(valor) {
    // Verifica se o usuário digitou mais de um operador seguido
    if (validarOperadorFinal(valor)) {
        return;
    }
    
    // Verifica se o usuário digitou mais de um ponto em um número
    if (validarPonto(valor)) {
        return;
    }
    
    // Verifica se o usuário digitou mais de um zero no início de um número
    if (validarZeroInicio(valor)) {
        return;
    }
    
    // Verifica se o usuário digitou mais de um operador no início da operação
    if (validarOperadorInicio(valor)) {
        return;
    }
    
    // Se passou por todas as validações, chama a função print
    print(valor);
}

// Função que verifica se o usuário digitou mais de um operador seguido
//TODO: Implemente a lógica da função
// Função que verifica se o usuário digitou mais de um operador no final da operação
function validarOperadorFinal(valor) {
    const ultimaPosicao = resultado.value[resultado.value.length - 1];
    const operadores = ['+', '-', '*', '/'];
    if (operadores.includes(valor) && operadores.includes(ultimaPosicao)) {
        // Se o último caractere é um operador e o usuário tenta adicionar outro operador, não faz nada
        return true;
    }
    return false;
}

// Função que verifica se o usuário digitou mais de um ponto em um número
// TODO: Implemente a lógica da função
function validarPonto(valor) {
    const ponto = '.';
    const temPonto = resultado.value.includes(ponto);
    if (valor === ponto && temPonto) {
        return true;
    }
    return false;
}
// Função que verifica se o usuário digitou mais de um zero no início de um número
// TODO: Implemente a lógica da função
function validarZeroInicio(valor) {
    if (resultado.value === '0' && valor === '0') {
        return true;
    }
    return false;
}

// Função que verifica se o usuário digitou mais de um operador no início da operação
// TODO: Implemente a lógica da função
function validarOperadorInicio(valor) {
    const operadores = ['+', '-', '*', '/'];
    if (operadores.includes(valor) && resultado.value === '0') {
        return true;
    }
    return false;
}


// Função que gerencia os eventos de clique nos botões da calculadora
// TODO: Implemente a lógica da função

// Função que gerencia os eventos de teclado na calculadora
//TODO: Implemente a lógica da função
botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        const valor = botao.getAttribute('data-valor'); 
        validarEPrint(valor);
    });
});

btnDEL.addEventListener('click', function(){
    resultado.value = resultado.value.slice(0, -1);
})

btnAC.addEventListener('click', function(){
    resultado.value = 0;
});
