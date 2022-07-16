import { Container } from "./styles";

import FoodPage from "../../components/FoodPage";
import OrderPage from "../../components/OrderPage";
import ProfilePage from "../../components/ProfilePage";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [page, setPage] = useState("Food");

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  const dataUser = JSON.parse(localStorage.getItem("@UserRegister:Data"));
  const history = useHistory();
  if (!dataUser) {
    history.push("/");
  }

  return (
    <Container>
      {page === "Food" && <FoodPage handlePage={handlePage} />}
      {page === "Orders" && <OrderPage handlePage={handlePage} />}
      {page === "Profile" && <ProfilePage handlePage={handlePage} />}
    </Container>
  );
};

export default Dashboard;
