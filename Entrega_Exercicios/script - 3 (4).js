let usu, sen;

usu = (prompt("Digite seu usuário: "));
sen = (prompt("Digite sua senha: "));

if ((usu == "admin") && (sen === "123456")){
    console.log("ACESSO DE ADMINISTRADOR");
} else if ((usu == "admin") && (sen !== "123456")){
    console.log("ACESSO DE USUÁRIO");
} else{
    console.log("ACESSO NEGADO");
}
