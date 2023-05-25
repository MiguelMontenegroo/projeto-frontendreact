import { Container } from "./styles"
import React from "react";

function Header(props) {

  const preco = [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
  ];


  const onChangeNome = (e) => {
    props.setBuscaNome(e.target.value);
  };

   const onChangeBuscaId = (e) => {
    props.setBuscaId(e.target.value);
  };
  const onChangeOrdenacao = (e) => {
    props.setOrdenaAlfabeto(e.target.value)
    };
    const onChangeBuscaPreco = (e) => {
      props.setBuscaPreco(e.target.value)
    };
  
  
  return (
      <div >
        <Container>
        <input
        type="number"
        placeholder="Buscar por id"
        onChange={onChangeBuscaId}
        value={props.buscaId}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={onChangeNome}
        value={props.buscaNome}
      />
      <select
      value={props.ordenaAlfabeto}
       onChange={onChangeOrdenacao}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select
        name="preco"
        id="preco"
        value={props.buscaPreco}
        onChange={onChangeBuscaPreco}
          >
        <option value="">Selecione um preço</option>
        {preco.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
        </Container>
          
      
        
      </div>
    );
  }
  
  export default Header;
  