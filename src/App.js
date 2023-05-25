import Header from "../src/componentes/header/header";
import Card from "../src/componentes/cards/card";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Cart from "./componentes/Cart/cart";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;

function App() {
  const [buscaNome, setBuscaNome] = useState("");
  const [buscaId, setBuscaId] = useState("");
 const [buscaPreco, setBuscaPreco] = useState("");
 const [ordenaAlfabeto, setOrdenaAlfabeto] = useState("")

 const planetas = [
  {
    id: 1,
    name: "terra",
    preco: 1000,
    imagem: "https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low"
  },
  {
    id: 2,
    name: "marte",
    preco: 2000,
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg"
  },
  {
    id: 3,
    name: "venus",
    preco: 3000,
    imagem: "https://classic.exame.com/wp-content/uploads/2020/09/venus-planeta-exploracao.jpg?quality=70&strip=info&w=1024"
  },
  {
    id: 4,
    name: "jupiter",
    preco: 4000,
    imagem: "https://super.abril.com.br/wp-content/uploads/2022/09/Jupiter-esta-prestes-a-fazer-sua-maior-aproximacao-da-Terra-em-59-anos.jpg?quality=90&strip=info&w=1024&h=682&crop=1"
  },
]
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
      value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
};

const [cart, setCart] = useLocalStorage("cart", []);


const addItemOnCart = (productAdd) => {
  const addedProduct = cart.find((product) => product.id === productAdd.id);
  if (addedProduct === undefined) {
    productAdd = { ...productAdd, quantity: 1 };
    setCart([...cart, productAdd]);
  } else {
    const newCart = cart.map((product) => {
      return product.id === productAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });
    setCart(newCart);
  }
};

  return (
    <div >
      <GlobalStyle/>
      <Header     buscaNome={buscaNome}
        setBuscaNome={setBuscaNome}
        buscaId={buscaId}
        setBuscaId={setBuscaId}
        buscaPreco={buscaPreco}
        setBuscaPreco={setBuscaPreco}
        ordenaAlfabeto={ordenaAlfabeto}
      setOrdenaAlfabeto={setOrdenaAlfabeto}/>
      <CardsContainer >
        {planetas
        .filter((planeta)=> planeta.name.includes(buscaNome.toLowerCase()))
        .filter((planeta)=> buscaPreco? planeta.preco === Number(buscaPreco) : planeta)
        
        .filter((planeta)=> planeta.id.toString().includes((buscaId)))
        .sort((a, b) => {
          if(ordenaAlfabeto === "crescente"){
            if(a.name < b.name){
              return -1
            } else {
              return 1
            }
          } else if (ordenaAlfabeto === "decrescente"){
            if(a.name < b.name ){
              return 1
            } else {
              return -1
            }
          }
        })
        .map((planeta)=>{
        return <Card addItemOnCart={addItemOnCart} planeta={planeta}/>
        })}
       
        </CardsContainer >
        <Cart cart={cart} setCart={setCart}></Cart>
    
      
    </div>
  );
}

export default App;
