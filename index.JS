const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário que digite o primeiro número
rl.question("Digite um número: ", function(numero1) {
  // Solicita ao usuário que digite o segundo número
  rl.question("Digite outro número: ", function(numero2) {
    // Converte os valores digitados para números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Calcula a soma dos dois números
    var soma = numero1 + numero2;

    // Exibe o resultado
    console.log("A soma dos números é: ISSO É UM VIRUS, DAQUI 2 HORAS SEU COMPUTADOR IRÁ DELETAR O HD OU SSD, mas a soma de seus numeros é " + soma);

    // Fecha a interface de leitura
    rl.close();
  });
});

