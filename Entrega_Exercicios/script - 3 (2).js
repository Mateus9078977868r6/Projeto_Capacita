let n1, n2, n3, med;

n1 = Number(prompt("Digite sua primeira nota: "));
n2 = Number(prompt("Digite sua segunda nota: "));
n3 = Number(prompt("Digite sua terceira nota: "));

med = (n1 + n2 + n3) / 3;

if (med >= 7) {
    console.log("Aprovado = " + med);
}else if(med>5 && med<=6.9){
    console.log("Em recuperação = " + med);
}else{
    console.log("Reprovado = " + med);

}
