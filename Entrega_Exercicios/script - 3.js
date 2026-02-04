let ope, a,b,res;

ope = prompt("Qual a operação que deseja realizar: ");
a = Number(prompt("Digite o primeiro número: "));
b = Number(prompt("Digite o segundo número: "));

if(ope == "soma"){
    res = a+b;
}else if(ope == "subtração"){
    res = a-b;
}else if(ope == "multiplicação"){
    res = a*b;
}else if(ope == "divisão"){
    res = a/b;
}else{
    print("Operação inválida");
}

console.log("Resultado = " + res);
