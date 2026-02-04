let ver;

let id = (prompt("Você tem mais de 18 anos: "));
if(id === "Sim" || id==="sim"){
    ver = true;
}else{
    ver = false;
}
if(ver == true){
    console.log("Você é maior de idade!");
}else if(ver == false){
    console.log("Você é menor de idade :(");
}
