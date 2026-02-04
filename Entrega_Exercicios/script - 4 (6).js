let cont=0;
function ver(n){
    for(let i=0;i<=n;i++){
        if(n%i==0){
            cont = cont + 1;
        }
    }
}

n = Number(prompt("Digite um número: "));
ver(n);
console.log("N_Divisores = " + cont);
if(cont==2){
    console.log("Número primo!");
}else{
    console.log("Número NORMAL.");
}
