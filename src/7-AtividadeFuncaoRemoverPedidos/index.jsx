// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`
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
  const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto) => {
        if (remover == false) {
            if (carro.id !== id){
                return carro
            } else{
                remover = true;
                return null
            }
        } else{
            return carro
        }
    });
    setListaPedidos(listaAux);
  }
  return 
    <div>
         <h1>Livros de Programação</h1>

      {
         listaCarros.map((carro)=>
          <div key={carros.id}>
            <p>{carro.marca}</p>
            <p>{carro.preco}</p>
            <button onClik={()=> adicionarItemPedidos(carro)}>Selecionar</button>
        </div> 
)
}
{
    listaPedidos.map((carro)=>
      <div key={carros.id}>
        <p>{carro.marca}</p>
        <p>{carro.preco}</p>
        </div>
     )
  }
</div>
