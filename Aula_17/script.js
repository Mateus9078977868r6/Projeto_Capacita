class Conta_Bancaria {
    #nome;
    #saldo;
    #entradas;
    #saidas;

    constructor(nome, saldo) {
        this.#saldo = saldo;
        this.#nome = nome;
        this.#entradas = [];
        this.#saidas = [];
    }

    consultar_saldo() {
        console.log("Saldo em Conta: ", + this.#saldo);
    }

    depositar_valor() {
        let entradas = Number(prompt("Qual o valor a depositar: "));

        if (entradas > 0 && (entradas != NaN)) {
            this.#entradas.push(entradas);
            this.#saldo = Number(this.#saldo) + entradas;
            console.log("Depósito: R$" + this.#entradas);
        } else {
            console.log("Valor Inválido.\n");
        }
    }

    sacar_valor() {
        let saidas = Number(prompt("Qual o valor a sacar: "));

        if (saidas > 0 && (saidas != NaN) && (this.#saldo >= saidas)) {
            this.#saidas.push(saidas);
            this.#saldo = Number(this.#saldo) - saidas;
            console.log("Saque: R$" + this.#saidas);
        } else {
            console.log("Valor Inválido para Saque.\n");
        }
    }

    historico_entradas() {
        console.log("--- Histórico de Entradas ---");
        if (this.#entradas.length === 0) {
            console.log("Nenhuma entrada registrada.");
        } else {
            console.log(this.#entradas);
        }
    }

    historico_saidas() {
        console.log("--- Histórico de Saídas ---");
        if (this.#saidas.length === 0) {
            console.log("Nenhuma saída registrada.");
        } else {
            console.log(this.#saidas);
        }
    }
}

let teste = new Conta_Bancaria("Felipe", 10000);
let ver = Number(prompt("Digite 1-Consultar Saldo, 2-Depositar um Valor, 3-Sacar um Valor, 4-Ver o Histórico de Entradas, 5-Ver o Histórico de Saídas, 6-Sair\n"));

while (ver != 6) {
    if(ver == 1) {
        teste.consultar_saldo();
    } else if (ver == 2) {
        teste.depositar_valor();
    } else if (ver == 3) {
        teste.sacar_valor();
    } else if (ver == 4) {
        teste.historico_entradas();
    } else if (ver == 5) {
        teste.historico_saidas();
    } else {
        console.log("Opçãp Inválida.\n");
    }

    ver = Number(prompt("Digite 1-Consultar Saldo, 2-Depositar um Valor, 3-Sacar um Valor, 4-Ver o Histórico de Entradas, 5-Ver o Histórico de Saídas, 6-Sair\n"));

}
