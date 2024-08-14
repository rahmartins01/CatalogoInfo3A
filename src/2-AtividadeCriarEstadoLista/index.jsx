// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {

    const [listaCarros, setCarros] = useState([
        {
            id:1,
            item: "Carro-Honda City sedan(2022)",
            preço: "90.00,00"
        },
        {
            id:2,
            item: "Carro-Toyota Corolla(2021)",
            preço: "85.00,00"
        },
        {
            id:3,
            item: "Citroen C3 Live 1.0",
            preço: "95.00,00"
        }
        
    ]);

    return (
        <div>
            <h1>Loja de carros</h1>
        </div>
           
    )
}