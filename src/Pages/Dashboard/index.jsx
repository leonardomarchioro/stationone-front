import { Container } from "./styles";

import FoodPage from "../../components/FoodPage";
import { useState } from "react";

const Dashboard = () => {
  const [page, setPage] = useState("Food");

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <Container>
      {page === "Food" && <FoodPage handlePage={handlePage} />}
      {page === "Orders" && <div>ORDERS</div>}
      {page === "Profile" && <div>PROFILE</div>}
    </Container>
  );
};

export default Dashboard;
