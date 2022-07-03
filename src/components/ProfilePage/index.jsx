import FooterDash from "../FooterDahsboard";

const ProfilePage = ({ handlePage }) => {
  return (
    <>
      <div>Profile</div>
      <FooterDash handlePage={handlePage} pageSelect="Profile" />
    </>
  );
};

export default ProfilePage;
