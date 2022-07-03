import { IoMdArrowRoundBack } from "react-icons/io";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import Button from "../../components/Button";

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
    console.log(data);
    handlePage("Order");
  };

  return (
    <>
      <div>
        <header>
          <div>
            <IoMdArrowRoundBack
              size={30}
              onClick={() => callSellerPage(payment)}
            />
          </div>
          <h1>Set Pickup Time</h1>
        </header>
        <main>
          <div>
            <span>Pick Up Location</span>
            <p>{payment.location}</p>
          </div>
          <div>
            <span>{payment.name} Hours</span>
            <h3>Daily:</h3>
          </div>
          <Input
            type="date"
            labelText="Date & Time"
            register={register}
            name={"date"}
            error={errors.date?.message}
          />
        </main>
        <footer>
          <Button onClick={handleSubmit(submitDate)}>Set Pickup Time</Button>
        </footer>
      </div>
    </>
  );
};

export default SetPickUpTimePage;
