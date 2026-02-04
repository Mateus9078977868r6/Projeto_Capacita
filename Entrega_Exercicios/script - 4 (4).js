let n,i,notas,med,tot=0;

n = Number(prompt("Quantos alunos existem na turma: "));

for(i=1;i<=n;i++){
    notas = Number(prompt("Digite a nota " + i));
    tot += notas;
}

med = tot/n;
console.log("Média da turma: " + med);