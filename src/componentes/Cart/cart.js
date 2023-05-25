import { useEffect, useState } from "react";
import { Container } from "../header/styles";

function Cart({cart, setCart}) {
    const [amount, setAmount] = useState(0);

  
  useEffect(() => {
    let newAmount = 0;
    cart.forEach((item) => {
      newAmount += item.preco * item.quantity;
    });
    setAmount(newAmount);
  }, [cart]);
  
  const removeItemFromCart = (item) => {
    
    cart.map((itemRemoved) => {
      if (itemRemoved.id === item && itemRemoved.quantity >= 1) {
        itemRemoved.quantity = itemRemoved.quantity - 1;
        setCart([...cart]);
      }
      if (itemRemoved.quantity === 0) {
        const cartRemovedItem = cart.filter(
          (itemRemoved) => itemRemoved.quantity !== 0
        );
        setCart(cartRemovedItem);
      }
    });
  };
 
return (
    <>
    <Container>
        <h1>Carrinho</h1>
        <Container>
          {cart.map((item, index) => (
            <Container key={index}>
              <div>
                <p>{item.name}</p>
                <img src={item.imageUrl} alt={item.name} />
                <p>Quantidade: {item.quantity}</p>
                <p>Valor: R${item.preco * item.quantity}</p>
              </div>
              <button onClick={() => removeItemFromCart(item.id)}>
                Remover
              </button>
            </Container>
          ))}
        </Container>
        <p>Valor Total: R${amount.toFixed(2)}</p>
        <button>Finalizar Compra</button>
      </Container>

    </>
)


}
export default Cart