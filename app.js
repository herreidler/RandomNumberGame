alert('Bem vindo ao jogo do número secreto');

//Adicione um console.log para verificar o valor de 'chute' após a entrada do usuário

let chute;
console.log('Valor do chute:', chute);

// Introduzindo o número aleatório com a função Math random. A parseInt converte o número em inteiro
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 1;

//Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);
//Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 100')
    // se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        //Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        console.log('Valor do número secreto:', numeroSecreto);
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}
// Utilizando um operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);

// }
