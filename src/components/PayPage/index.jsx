import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import paymentThunk from "../../store/modules/payment/thunk";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import OrderProgress from "../OrderProgress";
import Input from "../Input";
import Button from "../Button";

import { Header, Main } from "./styles";
import { toast } from "react-toastify";

const PayPage = ({ handlePage }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [prodcuts, setProducts] = useState(
    JSON.parse(localStorage.getItem("@Cart:Data")) || null
  );
  const payment = JSON.parse(localStorage.getItem("@Payment:Data"));

  const removeProduct = (id) => {
    const index = payment.findIndex((ele) => ele.id === id);

    payment[index].quantity = 0;
    localStorage.setItem("@Payment:Data", JSON.stringify(payment));

    const remove = prodcuts.filter((item) => id !== item.id);
    setProducts(remove);
    localStorage.setItem("@Cart:Data", JSON.stringify(remove));
  };

  if (!prodcuts) {
    history.push("/seller");
  }

  const total = prodcuts.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0
  );

  const schema = yup.object().shape({
    note: yup.string(),
    creditCard: yup.string().required("Credit card is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const cancelOrder = () => {
    dispatch(paymentThunk(false, false, history));
  };

  const handleLogin = (data) => {
    if (prodcuts.length > 0) {
      dispatch(paymentThunk({ prodcuts, ...data }, "confirm", history));
    } else {
      toast.error("Your cart is empty");
    }
  };

  return (
    <>
      <div>
        <Header>
          <div>
            <IoMdArrowRoundBack size={30} onClick={() => handlePage("Order")} />
          </div>
          <h1>Pay for Your Food</h1>
        </Header>
        <OrderProgress progress={3} />
        <Main>
          <ul>
            {prodcuts.map((item) => (
              <li key={item.id}>
                <div>
                  <h2>
                    {item.quantity} x {item.name}
                  </h2>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <FaTrash
                  onClick={() => {
                    removeProduct(item.id, item);
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="infos-payment">
            <Input
              labelText="Add Notes"
              register={register}
              name={"note"}
              error={errors.note?.message}
              placeholder="Add additional notes..."
            />
            <div className="priceInfos">
              <h2>Price</h2>
              <div>
                <div>
                  <span>Total Before Tax</span>
                  <span>Tax Amount</span>
                </div>
                <div>
                  <h3>${total.toFixed(2)}</h3>
                  <h3>$ 3,00</h3>
                </div>
              </div>
            </div>
            <div className="subtotal">
              <span>Total</span>
              <h2>${(3 + total).toFixed(2)}</h2>
            </div>
          </div>
          <div className="credit-card">
            <h2>Payment</h2>
            <Input
              labelText="Credit or debit card"
              register={register}
              name={"creditCard"}
              error={errors.creditCard?.message}
              placeholder="Card Number..."
            />
          </div>
          <div className="buttons">
            <Button
              className="payment-button"
              onClick={handleSubmit(handleLogin)}
            >
              PAY NOW
            </Button>
            <Button className="cancel-button" onClick={cancelOrder}>
              <FaTrash size={20} />
              CANCEL ORDER
            </Button>
          </div>
        </Main>
      </div>
    </>
  );
};

export default PayPage;
