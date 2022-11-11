// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 
let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = parseInt(gets());


//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

let encontrado = 0;

for (let i = 0; i < elementos.length; i++) {
  if (elementos[i] === valor) {
    console.log(`Achei ${elementos[i]} na posicao ${i}`);
    break;
  } else if (i + 1 === elementos.length) {
    console.log(`Numero ${valor} nao encontrado!`);
  }
}