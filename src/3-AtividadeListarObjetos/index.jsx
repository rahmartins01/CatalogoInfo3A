// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
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
         <h1>Livros de Programação</h1>

      {
         listaCarros.map((produto)=>
          <div key={carros.id}>
            <p>{carro.marca}</p>
            <p>{carro.preço}</p>
        </div>
        )
    }
    </div>
   
  );
}