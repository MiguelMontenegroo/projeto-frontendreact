import styled from "styled-components";
import {Container, ProdutoNome, ProdutoNumero, ProdutoPreco, ProdutoImagem} from './styles'



function Card(props) {
 console.log(props)
    return (
      <div >
        
          <Container>
            <ProdutoNumero>{props.planeta.id}</ProdutoNumero>
            <ProdutoNome >{props.planeta.name}</ProdutoNome>
            <ProdutoPreco>{props.planeta.preco}</ProdutoPreco>
            <ProdutoImagem src={props.planeta.imagem}></ProdutoImagem>
            <button onClick={ () => props.addItemOnCart(props.planeta)}>Adicionar</button>
            
      
          </Container>
        
          
      
        
      </div>
    );
  }
  
  export default Card;