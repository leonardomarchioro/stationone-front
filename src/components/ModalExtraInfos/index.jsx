import Button from "../Button";
import Input from "../Input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import registerThunk from "../../store/modules/register/thunk";

import { useHistory } from "react-router-dom";

const ModalExtraInfos = ({ setModal }) => {
  const { registerUser } = useSelector((state) => state);
  const history = useHistory();

  const schema = yup.object().shape({
    imageUrl: yup.string(),
    fullName: yup.string().required("Campo obrigatório"),
    phoneNumber: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const handleRegister = (data) => {
    setModal(false);
    dispatch(registerThunk({ ...registerUser, ...data }, "complete", history));

    console.log("Enviado para o thunk 'complete register'");
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Input
          labelText="Profile Picture"
          register={register}
          name={"imageUrl"}
          error={errors.imageUrl?.message}
          placeholder="Enter image url..."
        />
        <Input
          labelText="Full Name"
          register={register}
          name={"fullName"}
          error={errors.fullName?.message}
          placeholder="Enter Full Name..."
        />
        <Input
          labelText="Phone Number"
          register={register}
          name={"phoneNumber"}
          error={errors.phoneNumber?.message}
          placeholder="Enter Phone Number..."
        />
        <Button type="submit">CREATE USER</Button>
      </form>
      <Button onClick={() => setModal(false)} type="button">
        CANCEL
      </Button>
    </>
  );
};

export default ModalExtraInfos;
