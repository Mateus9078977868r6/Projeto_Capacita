class Departamento {
    #nome;
    constructor(nome) { this.#nome = nome; }
    get nome() { return this.#nome; }
}
class Empresa {
    #nome; #departamentos;
    constructor(nome) {
        this.#nome = nome;
        this.#departamentos = [];
    }
    get nome() { return this.#nome; }
    
    adicionarDepartamento(departamento) { 
        this.#departamentos.push(departamento);
        console.log(`Departamento ${departamento.nome} adicionado!`);

     }
    listarDepartamentos() { 
        this.#departamentos.forEach(dep => {
            console.log(" - " + dep.nome);
        });
     }
}   

const empresa = new Empresa("IFMG IBIRITÉ");
const depTI = new Departamento("T.I");
const depRH = new Departamento("R.H");
const depFI = new Departamento("Finanças");

empresa.adicionarDepartamento(depTI);
empresa.adicionarDepartamento(depRH);
empresa.adicionarDepartamento(depFI);
empresa.listarDepartamentos();
