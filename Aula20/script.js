class Retirar extends Error {
    constructor() {
        super("Saldo insuficiente para fazer essa operação");
    }
}
let conta_bancaria = {
    titular: "Mateus",
    saldo: 1000,
    depositar: function (valor) {
        this.saldo = this.saldo + valor
        return this.saldo
    },
    retirar: function (valor) {
        try {
            if (this.saldo < valor) {
                throw new Retirar();
            }
            this.saldo = this.saldo - valor
            return this.saldo
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }

    },
    exibir_saldo: function () {
        console.log("Valor = R$" + conta_bancaria.saldo)
    }

};

conta_bancaria.exibir_saldo();
conta_bancaria.depositar(500);
conta_bancaria.exibir_saldo();
conta_bancaria.retirar(200);
conta_bancaria.exibir_saldo();
conta_bancaria.retirar(1000);

conta_bancaria.exibir_saldo();
