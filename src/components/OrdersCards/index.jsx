import { formatDate } from "../../utils/helper";
import { Container, Orders, Products } from "./styles";

const OrdersCards = ({ orders }) => {
  console.log(orders);

  const subTotal = (cart) => {
    return cart.reduce((acc, cur) => (acc += cur.price * cur.quantity), 0);
  };

  return (
    <Container>
      <Orders>
        {orders.map((item, index) => (
          <li key={index}>
            <h2>{item.sellerName}</h2>
            <div>
              <span>Delivery Date: {formatDate(item.orderDate)}</span>
              <span>{item.sellerLocation}</span>
            </div>
            <Products>
              {item.cartData.map((product) => (
                <li>
                  <span>{product.name}</span>
                  <div>
                    <span>Quantity {product.quantity}</span>
                    <span>Price ${product.price.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </Products>
            <div className="subtotal">
              <h3>SubTotal</h3>
              <h3>${subTotal(item.cartData).toFixed(2)}</h3>
            </div>
          </li>
        ))}
      </Orders>
    </Container>
  );
};
export default OrdersCards;
