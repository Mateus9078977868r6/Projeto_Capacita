let l1, l2, l3;
let ver=0;

l1 = Number(prompt("Digite o primeiro lado: "));
l2 = Number(prompt("Digite o segundo lado: "));
l3 = Number(prompt("Digite o terceiro lado: "));

if (l1 >= l2 && l1 >= l3) {
    if (l1 < l2 + l3) {
        ver = 1;
    }
} else if (l2 >= l1 && l2 >= l3) {
    if (l2 < l1 + l3) {
        ver = 1;
    }
} else if (l3 >= l2 && l3 >= l1) {
    if (l3 < l1 + l2) {
        ver = 1;
    }
} else{
    console.log("Condição inválida");
}

if(ver===1){
    if((l1==l2) && (l1==l3)){
        console.log("Triângulo Equilátero!");
    }else if ((l1!==l2) && (l2!==l3) && (l1!=l3)){
        console.log("Triângulo Escaleno");
    }else{
        console.log("Triângulo Isósceles");
    }
}else{
    console.log("Não formam um triângulo");
}
