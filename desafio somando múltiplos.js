// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

soma = 0;
for(let i = N; i >= a; i--) {
  if(i % a == 0) {
    soma = soma + i
  }
}
  print(soma)