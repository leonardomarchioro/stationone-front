import { IoMdArrowRoundBack } from "react-icons/io";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import Button from "../../components/Button";
import OrderProgress from "../OrderProgress";

import { Container, Header, Main, Footer } from "./styles";

const SetPickUpTimePage = ({ handlePage, payment, callSellerPage }) => {
  const schema = yup.object().shape({
    date: yup.date("Invalid Date"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitDate = (data) => {
    handlePage("Order");
  };

  return (
    <>
      <Container>
        <Header>
          <div>
            <IoMdArrowRoundBack
              size={30}
              onClick={() => callSellerPage(payment)}
            />
          </div>
          <h1>Set Pickup Time</h1>
        </Header>
        <OrderProgress progress={1} />
        <Main>
          <div>
            <span>Pick Up Location</span>
            <p>{payment.location}</p>
          </div>
          <div>
            <span>{payment.name} Hours</span>
            <p>Daily:</p>
          </div>
          <Input
            type="date"
            labelText="Date & Time"
            register={register}
            name={"date"}
            error={errors.date?.message}
          />
        </Main>
        <Footer>
          <Button onClick={handleSubmit(submitDate)}>Set Pickup Time</Button>
        </Footer>
      </Container>
    </>
  );
};

export default SetPickUpTimePage;
