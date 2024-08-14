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
        <button onClik={() => removerPedido(carro.id)}>Remover</button>
        </div>
     )
  }
</div>


import { Link } from "react-router-dom";
import "./globals.css";

export default function App() {
    return (
        <div>
            <h1>Lista de Exercícios</h1>
            <ol type='1'>
                <li>
                    <Link to="/primeiraAtividade">Atividade 1: Criar componente de página Home</Link>
                </li>
                <li>
                    <Link to="/segundaAtividade">Atividade 2: Criar estado para lista de produtos</Link>
                </li>
                <li>
                    <Link to="/terceiraAtividade">Atividade 3: Listar os objetos da lista de produtos</Link>
                </li>
                <li>
                    <Link to="/quartaAtividade">Atividade 4: Criar estado e função para adicionar o objeto na lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/quintaAtividade">Atividade 5: Criar botão para adicionar o objeto na lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/sextaAtividade">Atividade 6: Listar os objetos da lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/setimaAtividade">Atividade 7: Criar a função para remover objeto da lista de pedidos</Link>
                </li>
                <li>
                    <Link to="/oitavaAtividade">Atividade 8: Criar botão para remover o objeto do pedido</Link>
                </li>
            </ol>
        </div>
    );
}
