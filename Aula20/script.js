class Negativo extends Error {
    constructor() {
        super("O número deve ser positivo.");
    }
}
class String extends Error {
    constructor() {
        super("Isso deve ser um número!");
    }
}
try{
    let a = Number(prompt("Digite o valor de a: "));
    if(isNaN(a)){
        throw new String();
    }
    if(a<0){
        throw new Negativo();
    }
    console.log(a);
}catch(erro){
    console.log(erro.name);
    console.log(erro.message);
}