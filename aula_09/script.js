function somar(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function multi(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}
function calcular(a,b,op){
    if(op=="soma"){
        return somar(a,b);
    }else if(op=="subtracao"){
        return sub(a,b);
    }else if(op=="multiplicacao"){
        return multi(a,b);
    }else if(op=="divisao"){
        return div(a,b);
    }else{
        return console.log("Erro");
    }
}

console.log(calcular(5,3,"soma"));
console.log(calcular(5,3,"divisao"));