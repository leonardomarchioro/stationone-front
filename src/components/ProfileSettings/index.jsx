import Input from "../Input";
import Button from "../Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlinePoweroff } from "react-icons/ai";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginThunk from "../../store/modules/login/thunk";
import registerThunk from "../../store/modules/register/thunk";

import { useState } from "react";
import { Container, Header, Main } from "./styles";

const ProfileSettings = ({ setSettings }) => {
  const dataUser = JSON.parse(localStorage.getItem("@UserRegister:Data"));
  const history = useHistory();

  if (!dataUser) {
    history.push("/");
  }
  const [fullName, setFullName] = useState(dataUser.fullName);
  const [imageUrl] = useState(
    "https://adalo-uploads.imgix.net/1931256939a2e431f33b48b2e905f1bf724acbda6b00bb324ad0729559a9d99c.jpg?orient"
  );
  const [phoneNumber, setPhoneNumber] = useState(dataUser.phoneNumber);
  const [email, setEmail] = useState(dataUser.email);

  const schema = yup.object().shape({
    fullName: yup.string().required("Name is required!"),
    imageUrl: yup.string(),
    phoneNumber: yup.string().required("Number is required!"),
    email: yup.string().required("Email is required!").email("Invalid Format"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(loginThunk());
    history.push("/");
  };

  const handleUpdate = (data) => {
    setSettings(false);
    dispatch(
      registerThunk({ ...data, password: dataUser.password }, "update", history)
    );
  };
  return (
    <Container>
      <Header>
        <div>
          <IoMdArrowRoundBack size={25} onClick={() => setSettings(false)} />
        </div>
        <h1>My Profile</h1>
      </Header>
      <Main>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <Input
            labelText="Full Name"
            register={register}
            name={"fullName"}
            error={errors.fullName?.message}
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <img src={imageUrl} alt="profilePicture" />
          <Input
            labelText="Profile Picture"
            register={register}
            name={"imageUrl"}
            error={errors.imageUrl?.message}
            value={imageUrl}
          />
          <Input
            labelText="Phone Number"
            register={register}
            name={"phoneNumber"}
            error={errors.phoneNumber?.message}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <Input
            labelText="Email"
            register={register}
            name={"email"}
            error={errors.email?.message}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button type="submit">SAVE</Button>
        </form>
        <Button onClick={logOut} type="button">
          <AiOutlinePoweroff size={25} />
          LOG OUT
        </Button>
      </Main>
    </Container>
  );
};
export default ProfileSettings;
