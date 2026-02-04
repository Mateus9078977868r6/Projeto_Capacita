let n,i,tot=1;
n = Number(prompt("Digite algum numero: "));
for(i=1;i<=n;i++){
    tot = i*tot;
}
console.log("FATORIAL DELE: " + tot);