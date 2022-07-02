import Button from "../Button";

import { useState } from "react";

import { TbTruckDelivery } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Container } from "./style";

const FooterDash = ({ handlePage }) => {
  const [page, setPage] = useState("Food");

  return (
    <Container>
      <Button
        onClick={() => {
          setPage("Food");
          handlePage("Food");
        }}
        className={page === "Food" ? "active" : "no"}
      >
        <TbTruckDelivery />
        Food
      </Button>
      <Button
        onClick={() => {
          setPage("Orders");
          handlePage("Orders");
        }}
        className={page === "Orders" ? "active" : "no"}
      >
        <BiDetail />
        Orders
      </Button>
      <Button
        onClick={() => {
          setPage("Profile");
          handlePage("Profile");
        }}
        className={page === "Profile" ? "active" : "no"}
      >
        <CgProfile />
        Profile
      </Button>
    </Container>
  );
};

export default FooterDash;
