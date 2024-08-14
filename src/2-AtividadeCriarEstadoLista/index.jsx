// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {

    const [listaCarros, setCarros] = useState([
        {id: 1, nomeCarro: 'Carro A', preco: 'R$ 90.000'},
        {id: 2, nomeCarro: 'Carro B', preco: 'R$ 85.000'},
        {id: 3, nomeCarro: 'Carro C', preco: 'R$ 95.000'}
    ]);

    return (
        <div>
            <h1>Loja de carros</h1>
        </div>
           
    )
}