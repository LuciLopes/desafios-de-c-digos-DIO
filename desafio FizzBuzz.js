// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz () {
  if(resultado % 3 == 0 && resultado % 5 == 0) return 'FizzBuzz';
  if(resultado % 3 == 0) return 'Fizz';
  if(resultado % 5 == 0) return 'Buzz';
  
  return resultado;
} fizzBuzz()

