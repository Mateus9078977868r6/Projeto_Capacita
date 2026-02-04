let n0 = 0;
let n1 = 1
let prox = 0;

let n = Number(prompt("Digite algum numero e vou te dar a sequência de fibbonaci até a posição dele"));
for(let i=0; i<=n; i++){
    console.log(n0 + " ");
    prox = n0+n1;
    n0 = n1;
    n1 = prox;
}
