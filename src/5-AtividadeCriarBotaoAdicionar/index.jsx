// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.
import { useState } from "react";

export default function Home() {}
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Produto A', preco: 'R$ 10,00' },
    { id: 2, nome: 'Produto B', preco: 'R$ 20,00' },
    { id: 3, nome: 'Produto C', preco: 'R$ 30,00' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (obj) => {
    setListaPedidos([... listaPedidos, obj])
  }

  return 
    <div>
         <h1>Livros de Programação</h1>

      {
         listaCarros.map((produto)=>
          <div key={carros.id}>
            <p>{carro.marca}</p>
            <p>{carro.preço}</p>
            <button onClik={()=> adicionarItemPedidos(carro)}>Selecionar</button>
        </div>
        
)
}

        </div>