function Info() {
    let nome = prompt("Digite seu nome:");
    let idade = Number(prompt("Digite sua idade:"));
    let prof = prompt("Digite sua profissão:");
    let ativo = false;
    return (
        <div>
            <h2>Informações do Usuário</h2>
            <h3>Nome: {nome}</h3>
            <h3>Tem: {idade} anos</h3>
            {prof && <h3>Profissão: {prof}</h3>}
        </div>
    );
}
export default Info;