import { useEffect, useState } from "react";
import SellerCard from "../SellerCard";
import { products } from "../../utils/products";
import FooterDash from "../FooterDahsboard";
import { Header, Main } from "./styles";
import { replaceCaracters } from "../../utils/helper";

const FoodPage = ({ handlePage }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    if (search.length > 0) {
      const newSearch = replaceCaracters(search);
      const newFilter = products.filter((item) => {
        const name = replaceCaracters(item.name);
        return name.includes(newSearch);
      });
      setFilter(newFilter);
    } else {
      setFilter(products);
    }
  }, [search]);

  return (
    <>
      <Header />
      <Main>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {filter.map((item) => {
            return <SellerCard key={item.id} product={item} />;
          })}
        </ul>
      </Main>
      <FooterDash handlePage={handlePage} pageSelect="Food" />
    </>
  );
};

export default FoodPage;
