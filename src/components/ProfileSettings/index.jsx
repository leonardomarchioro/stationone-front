import Input from "../Input";
import Button from "../Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlinePoweroff } from "react-icons/ai";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";

import { useState } from "react";
import { Container, Header, Main } from "./styles";

const ProfileSettings = ({ setSettings }) => {
  const [fullName, setFullName] = useState("Dude");
  const [imageUrl, setImageUrl] = useState(
    "https://adalo-uploads.imgix.net/1931256939a2e431f33b48b2e905f1bf724acbda6b00bb324ad0729559a9d99c.jpg?orient"
  );
  const [phoneNumber, setPhoneNumber] = useState("+11991234573");
  const [email, setEmail] = useState("dude@gmail.com");

  const history = useHistory();

  const schema = yup.object().shape({
    fullName: yup.string(),
    imageUrl: yup.string(),
    phoneNumber: yup.string(),
    email: yup.string().email("Invalid Format"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logOut = () => {
    history.push("/");
    localStorage.clear();
  };

  const handleUpdate = (data) => {
    setSettings(false);
    console.log(data);
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
            onChange={(event) => setImageUrl(event.target.value)}
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
