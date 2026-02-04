let menu = 0;
let array = [];
let item = " ";
let ind, rem;
let mod = " ";
let remo;

function add(item) {
    item = (prompt("Digite o que quer adicionar: "));
    if (array.length > 0) {
        array.push(item);
        console.log("Item: " + item + " adicionado");
    } else {
        console.log("Preciso que voce digite algo.");
    }
}
function mostrar() {
    if (array.length > 0) {
        console.log("Itens: \n");
        console.log(array);
    } else {
        console.log("Sem itens para mostrar.");
    }
}
function atualizar(ind, mod) {
    ind = Number(prompt("Digite a posição do item que deseja atualizar: "));
    if (ind < 0 || ind >= array.length) {
        alert("Posição inválida!");
    } else {
        mod = prompt("Digite o novo item: ");
        console.log("Atualização: " + mod);
        array[ind] = mod;
    }
}
function remove(rem, remo) {
    rem = Number(prompt("Digite \n 1- Remover o primeiro \n 2- Remover o ultimo"));
    if (array.length <= 0) {
        console.log("Sem itens para remover.");
    } else {
        if (rem == 2) {
            remo = array.pop();
            console.log("Novo Array: " + array);
        } else if (rem == 1) {
            array.shift();
            console.log("Novo Array: " + array);
        } else {
            console.log("Valor inválido.");
        }
    }
}
while (menu != 5) {
    menu = Number(prompt("Digite: \n 1- Adicionar um item \n 2- Exibir todos os itens \n 3- Atualizar um item \n 4- Remover um item \n 5- Sair"));

    if (menu == 1) {
        add(item);
        continue;
    } else if (menu == 2) {
        mostrar();
    } else if (menu === 3) {
        atualizar(ind, mod);
    } else if (menu === 4) {
        remove(rem, remo);
    } else if (menu === 5) {
        console.log("Saindo...");
    } else {
        console.log("Valor Inválido!");
    }
}
