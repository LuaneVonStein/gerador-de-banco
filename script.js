let saldo = 0;

function depositar(valor) {
  saldo += valor;
  console.log("Depósito de R$" + valor + " realizado.");
}

function sacar(valor) {
  if (valor <= saldo) {
    saldo -= valor;
    console.log("Saque de R$" + valor + " realizado.");
  } else {
    console.log("Saldo insuficiente para saque.");
  }
}


function consultarSaldo() {
  console.log("Seu saldo é de R$" + saldo);
}


depositar(100);
consultarSaldo();

sacar(50);
consultarSaldo();

sacar(100);
consultarSaldo();

  