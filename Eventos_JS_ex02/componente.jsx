function RecipeCard() {

    const receita = {
        titulo: "Bola de Cenoura",
        tempo: "20 minutos",
        dificuldade: "Médio",
        ingredientes: [
            "Cenoura",
            "Leite",
            "Ovo",
            "Farinha"
        ],
        preparo: ["Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.",
            "Acrescente o açúcar e bata novamente por 5 minutos.",
            "Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.",
            "Acrescente o fermento e misture lentamente com uma colher.",
            "Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos."],

    }
    return (
        <div style={{
            textAlign: 'center',
            borderColor: 'black',
            borderWidth: '1px',
            borderStyle: 'solid',
            fontFamily: 'sans-serif'
        }}>
            <h1>{receita.titulo}</h1>
            <h2>Tempo de Preparo: {receita.tempo}</h2>
            <h2 style={{ color: 'orange' }}>Dificuldade: {receita.dificuldade}</h2>
            <h3>Ingredientes: </h3>
            <ul style={{
                textAlign: 'left',
                display: 'inline-block'
            }}>
                {receita.ingredientes.map(ingredientes => (
                    <li key={ingredientes}>{ingredientes}</li>
                ))}
            </ul>
            <h3>Modo de Preparo: </h3>
            <ul style=
                {{ textAlign: 'left', display: 'inline-block' }}>
                {receita.preparo.map(preparo => (
                    <li key={preparo}>{preparo}</li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<RecipeCard />, document.getElementById('root'));