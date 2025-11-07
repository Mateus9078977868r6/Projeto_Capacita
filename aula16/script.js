class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(this.nome + " tem " + this.idade + " anos");
    }
}
let p1 = new Pessoa("Ana", 30);
let p2 = new Pessoa("Bia", 40);
p1.apresentar();
p2.apresentar();




class Retangulo {
    constructor(nome, largura, altura) {
        this.nome = nome;
        this.largura = largura;
        this.altura = altura;
    }
    obterNome() {
        console.log("Nome: " + this.nome);
    }
    calcularPerimetro() {
        let per = (this.largura * 2) + (this.altura * 2);
        console.log("Perímetro = " + per);
    }
    calcularArea() {
        let area = this.altura * this.largura;
        console.log("Area = " + area);
    }
    atualizarLargura() {
        this.largura = Number(prompt("Digite a nova largura: "));
        console.log("Nova largura: " + this.largura);
    }
    atualizarAltura() {
        this.altura = Number(prompt("Digite a nova altura: "));
        console.log("Nova altura: " + this.altura);
    }
}

let r1 = new Retangulo("p1", 4, 7);

r1.obterNome();
r1.calcularPerimetro();
r1.calcularArea();
r1.atualizarLargura();
r1.atualizarAltura();
r1.calcularPerimetro();
r1.calcularArea();

class Aluno {
    constructor(nome,notas){
        this.nome = nome;
        this.notas = notas;
    }
    obter_nome() {
        console.log("Nome: " + this.nome);
    }
    adicionarNota(notas){
        notas = Number(prompt("Digite a nota: "));
        console.log("Nota = " + notas)
    }
    calcularMedia(){
        if(this.notas.length == 0){
            return 0;
        }
        let soma=0;
        for(let i=0;i<this.notas.length;i++){
            soma += this.notas;
        }
        let media = (soma/(this.notas.length));
        return console.log("Media = " + media);
    }

}
let notas=0;
let a1 = new Aluno("Mateus",3)
a1.obter_nome();
a1.adicionarNota(notas);
a1.adicionarNota(notas);
a1.adicionarNota(notas);
a1.calcularMedia();
