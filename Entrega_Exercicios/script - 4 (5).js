let escolha;
let vit=0, emp=0, der=0;
let num = Math.floor(Math.random() * 3);


while(escolha != "0"){
    escolha = prompt("Pedra Papel ou Tesoura (aperte 0 para parar): ");
    let num = Math.floor(Math.random() * 3);

    if(escolha == "Pedra"){
        if(num == 0){
            emp++;
            console.log("Empate");
        }else if (num == 1){
            der++;
            console.log("Derrota");
        }else{
            vit++;
            console.log("Vitória");

        }
    }

    if(escolha == "Papel"){
        if(num == 0){
            vit++;
            console.log("Vitória");
        }else if (num == 1){
            emp++;
            console.log("Empate");
        }else{
            der++;
            console.log("Derrota");
        }
    }

    if(escolha == "Tesoura"){
        if(num == 0){
            der++;
            console.log("Derrota");
        }else if (num == 1){
            vit++;
            console.log("Vitória");
        }else{
            emp++;
            console.log("Empate");
        }
    }

}

console.log("Vitórias: " + vit);
console.log("Empates: " + emp);
console.log("Derrotas: " + der);



