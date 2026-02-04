let menu = 0;
let array = [];
let item = " ";
while (menu != 5) {
    menu = Number(prompt("Digite: \n 1- Adicionar um item \n 2- Exibir todos os itens \n 3- Atualizar um item \n 4- Remover um item \n 5- Sair"));

    if (menu == 1) {
        item = (prompt("Digite o que quer adicionar: "));
        array.push(item);
        console.log("Item: " + item + " adicionado");
        continue;
    } else if (menu == 2) {
        console.log("Itens: \n");
        console.log(array);
    } else if (menu === 3) {
        let ind = Number(prompt("Digite a posição do item que deseja atualizar: "));
        let mod = prompt("Digite o novo item: ");
        console.log("Atualização: " + mod);
        array[ind] = mod;
    } else if (menu === 4) {
        let rem = Number(prompt("Digite \n 1- Remover o primeiro \n 2- Remover o ultimo"));
        if (rem == 2) {
            let remo = array.pop();
            console.log("Novo Array: " + array);
        }else if(rem == 1){
            array.shift();
            console.log("Novo Array: " + array);
        }
    } else if (menu === 5) {
    } else {
        console.log("Valor Inválido!");
    }
}
