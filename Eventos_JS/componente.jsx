function Profile(){
    let nome = "Mateus";
    let prof = "Estudante";
    let cidade = "Juatuba";
    let foto = "https://clubepaineiras.org.br/wp-content/uploads/2022/05/jogadores.jpg"
    return (
        <div style={ {
            textAlign: 'center', 
            borderColor: 'black',
            borderWidth: '1px',
            borderStyle: 'solid'
        } }>
            <h1>Nome: {nome}</h1>
            <h1>Profissão: {prof}</h1>
            <h1>Cidade: {cidade}</h1>
            <img src={foto} alt={"Foto de Futebol"} width="500"/>
        </div>
    );
}
ReactDOM.render(<Profile />, document.getElementById('root'));