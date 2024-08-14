// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`
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

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (obj) => {
    setListaPedidos([... listaPedidos, obj])
  }

  return (
    <div>
         <h1>Livros de Programação</h1>
         </div>
       {
        listaProdutos.map((produto)=>
          <div key={carros.id}>
            <p>{carro.marca}</p>
            <p>{carro.preço}</p>
        </div>
)
    }   
  );
}