class Animal {
    #nome;
    #numero_patas;
    constructor(nome, numero_patas) {
        this.#nome = nome;
        this.#numero_patas = numero_patas;
    }

    emitir_som() {
        return "Som genérico";
    }

    get nome() { return this.#nome; }
    get tipo() {
        return this.constructor.name; // Truque para saber se é Gato, Cachorro, etc.
    }
}

class Cachorro extends Animal {
    constructor(nome, numero_patas) {
        super(nome, numero_patas);
    }

    emitir_som() {
        return "Au Au";
    }
}

class Gato extends Animal {
    constructor(nome, numero_patas) {
        super(nome, numero_patas);
    }

    emitir_som() {
        return "Miauu";
    }
}

class Passaro extends Animal {
    constructor(nome, numero_patas) {
        super(nome, numero_patas);
    }

    emitir_som() {
        return "Pi pi pi";
    }
}
const listaAnimais = [];
let opcao = 0;

while (opcao !== 7) {
    opcao = Number(prompt(
        "---- Menu Interativo ----\n" +
        "1- Cadastrar Cachorro\n" +
        "2- Cadastrar Gato\n" +
        "3- Cadastrar Pássaro\n" +
        "4- Cadastrar outro Animal genérico\n" +
        "5- Listar todos os Animais\n" +
        "6- Emitir Sons de todos\n" +
        "7- Sair"
    ));

    let nome, patas;
    if (opcao >= 1 && opcao <= 4) {
        nome = prompt("Digite o nome do animal:");
        patas = Number(prompt("Quantas patas ele tem?"));
        if (opcao == 1) {
            listaAnimais.push(new Cachorro(nome, patas));
            alert("Cachorro cadastrado!");

        } else if (opcao == 2) {
            listaAnimais.push(new Gato(nome, patas));
            alert("Gato cadastrado!");

        } else if (opcao == 3) {
            listaAnimais.push(new Passaro(nome, patas));
            alert("Pássaro cadastrado!");

        } else if (opcao == 4) {
            listaAnimais.push(new Animal(nome, patas));
            alert("Animal genérico cadastrado!");
        }
    } else if (opcao == 5) {
        // Listar Animais
        let texto = "--- Lista de Animais ---\n";
        // Percorre a lista e pega o nome de cada um
        listaAnimais.forEach(animal => {
            texto += `${animal.tipo}: ${animal.nome}\n`;
        });
        alert(texto);

    } else if (opcao == 6) {
        // Emitir Sons (Polimorfismo)
        let sons = "--- Sons da Fazenda ---\n";
        listaAnimais.forEach(animal => {
            // Cada animal executa seu próprio método emitir_som
            sons += `${animal.nome} faz: ${animal.emitir_som()}\n`;
        });
        alert(sons);

    } else if (opcao == 7) {
        alert("Saindo...");
    } else {
        alert("Opção Inválida!");
    }
}