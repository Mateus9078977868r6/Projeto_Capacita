try{
    let a = Number(prompt("Digite o valor de a: "));
    let b = Number(prompt("Digite o valor de b: "));
    let res = a/b;
    if(isNaN(res)){
        throw new Error("Valores Invalidos.");
    }
    if(res == Infinity || res == -Infinity){
        throw new Error("Divisão por 0");
    }
    console.log(res);
}catch(erro){
    console.log(erro.name);
    console.log(erro.message);
}