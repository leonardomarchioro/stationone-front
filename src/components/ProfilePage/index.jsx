import { useState } from "react";
import { useHistory } from "react-router-dom";

import FooterDash from "../FooterDahsboard";
import { IoSettingsSharp } from "react-icons/io5";

import Logo from "../../assets/logo.jpg";
import { Container, Header, Main } from "./styles";
import ProfileSettings from "../ProfileSettings";

const ProfilePage = ({ handlePage }) => {
  const history = useHistory();

  const [settings, setSettings] = useState(false);

  const dataUser = JSON.parse(localStorage.getItem("@UserRegister:Data"));

  if (!dataUser) {
    history.push("/");
  }

  return (
    <>
      {settings ? (
        <ProfileSettings setSettings={setSettings} />
      ) : (
        <Container>
          <Header>
            <IoSettingsSharp size={25} onClick={() => setSettings(true)} />
          </Header>
          <Main>
            <h1>{dataUser.fullName}</h1>
            <img src={Logo} alt="ProfilePicture" />
            <div>
              <span>Phone Number</span>
              <h3>{dataUser.phoneNumber}</h3>
              <span>Email</span>
              <h3>{dataUser.email}</h3>
            </div>
          </Main>
          <FooterDash handlePage={handlePage} pageSelect="Profile" />
        </Container>
      )}
    </>
  );
};

export default ProfilePage;
