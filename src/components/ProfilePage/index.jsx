import { useState } from "react";

import FooterDash from "../FooterDahsboard";
import { IoSettingsSharp } from "react-icons/io5";

import Logo from "../../assets/logo.jpg";
import { Container, Header, Main } from "./styles";
import ProfileSettings from "../ProfileSettings";

const ProfilePage = ({ handlePage }) => {
  const [settings, setSettings] = useState(false);

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
            <h1>UserName</h1>
            <img src={Logo} alt="ProfilePicture" />
            <div>
              <span>Phone Number</span>
              <h3>+11991234573</h3>
              <span>Email</span>
              <h3>dude@gmail.com</h3>
            </div>
          </Main>
          <FooterDash handlePage={handlePage} pageSelect="Profile" />
        </Container>
      )}
    </>
  );
};

export default ProfilePage;
