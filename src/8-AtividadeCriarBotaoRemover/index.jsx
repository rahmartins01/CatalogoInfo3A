import { useState } from "react";

export default function Home() {}
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
  };

  return (
    <div>
        <h1>Loja de carros</h1>
    </div>
);

      {
         listaCarros.map((carro)=>
          <div key={carros.id}>
            <p>{carro.marca}</p>
            <p>{carro.preco}</p>
            <button onClik={()=> adicionarItemCarro(carro)}>Selecionar</button>
        </div> 
)
}
{
    listaCarros.map((carro)=>
     <div key={carros.id}>
       <p>{carro.marca}</p>
       <p>{carro.preco}</p>
       <button onClik={()=> removerPedido(carro.id)}>removerr</button>
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
     </div>
  }
