// Manipulação de Strings

let texto = "Aprendendo JavaScript é divertido e recompensador!";

let textoMaiusculas = texto.toUpperCase();
console.log(textoMaiusculas);

let contemDivertido = texto.includes("divertido");
console.log(contemDivertido);

let palavras = texto.split(" ");
console.log(palavras);

let palavras2 = texto.split(" ");
let textoComHifens = palavras.join("-");
console.log(textoComHifens);


// Operações com Números

let num1 = 200.456;
let num2 = 150.789;

let num1Arredondado = Math.round(num1);
console.log(num1Arredondado);

let maximo = Math.max(num1, num2);
let minimo = Math.min(num1, num2);

console.log("Valor máximo:", maximo);
console.log("Valor mínimo:", minimo);

let raizQuadrada = Math.sqrt(num2);
console.log("Raiz quadrada:", raizQuadrada);

let num1Cie = num1.toExponential();
console.log(num1Cie);


// Lógica Booleana e Comparações

let x = 8;
let y = 12;
let z = 8;

if (x >= y) {
    console.log("x é maior ou igual a y");
} else {
    console.log("x é menor que y");
}

if (x != z) {
    console.log("x é diferente");
} else {
    console.log("x não é diferente");
}

let yz = y + z;

if (yz > x) {
    console.log("Y e Z são maiores que X");
} else {
    console.log("X é maior");
}

let resultado = (x === z) || (y < z);
console.log("x é igual a z ou y é menor que z:", resultado);


// Trabalhando com Null, Undefined, e NaN

let nulo = null;

let igualAUndefined = (nulo == undefined);
let estritamenteIgualAUndefined = (nulo === undefined);

console.log("nulo é igual a undefined (usando ==):", igualAUndefined);
console.log("nulo é estritamente igual a undefined (usando ===):", estritamenteIgualAUndefined);

let indefinido;

let indefinidoEhNaN = isNaN(indefinido);
console.log("indefinido é NaN:", indefinidoEhNaN);

let numStr2 = "123abc";
let convertido = Number(numStr2);
let convertidoEhNaN = isNaN(convertido);
console.log("Convertido é NaN:", convertidoEhNaN);


// Manipulação de Arrays

let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log("Array após adicionar 60:", numeros);

let valorRemovido = numeros.pop();
console.log("Valor removido:", valorRemovido);
console.log("Array após remover o último valor:", numeros);

numeros.splice(2, 1);
console.log("Array após remover o terceiro elemento:", numeros);

numeros.sort((a, b) => b - a);
console.log("Array ordenado em ordem decrescente:", numeros);


// Manipulação de Objetos Avançada

let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};

console.log("Cidade do endereço:", pessoa.endereco.cidade);

pessoa.profissao = "Arquiteto";
console.log("Objeto atualizado:", pessoa);

pessoa.telefone = "1234-5678";
console.log("Objeto com telefone adicionado:", pessoa);


// Funções e Escopo

function soma(a, b) {
    return a + b;
}

function ehPar(numero) {
    return numero % 2 === 0;
}

function dobraValores(array) {
    return array.map(valor => valor * 2);
}

function contaCaracteres(str) {
    return str.length;
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}


// Manipulação de Datas e Horas

let proximoAniversario = new Date('2024-09-15'); // Substitua pela sua data de aniversário
let dataAtual = new Date();

let diffTempo = proximoAniversario - dataAtual;
let diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));
console.log("Diferença em dias:", diffDias);

let ano = dataAtual.getFullYear();
let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
let dia = String(dataAtual.getDate()).padStart(2, '0');
console.log("Data atual (YYYY-MM-DD):", `${ano}-${mes}-${dia}`);

dataAtual.setDate(dataAtual.getDate() + 30);
ano = dataAtual.getFullYear();
mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
dia = String(dataAtual.getDate()).padStart(2, '0');
console.log("Nova data após adicionar 30 dias:", `${ano}-${mes}-${dia}`);


// Trabalhando com Funções de Callback

function executaOperacao(a, b, operacao) {
    return operacao(a, b);
}

function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

console.log("Soma:", executaOperacao(5, 3, soma));
console.log("Multiplicação:", executaOperacao(5, 3, multiplicacao));

function repetirOperacao(n, operacao) {
    let resultado = 1;
    for (let i = 0; i < n; i++) {
        resultado = operacao(resultado);
        console.log("Resultado após iteração", i + 1, ":", resultado);
    }
}

function contarOcorrencias(str, caractere) {
    let count = 0;
    str.split('').forEach(c => {
        if (c === caractere) {
            count++;
        }
    });
    console.log("Número de ocorrências de", caractere, ":", count);
}

repetirOperacao(5, valor => valor * 2);
contarOcorrencias("banana", 'a');
