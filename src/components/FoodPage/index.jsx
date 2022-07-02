import { useEffect, useState } from "react";
import SellerCard from "../SellerCard";
import { products } from "../../utils/products";
import SellerPage from "../SellerPage";
import FooterDash from "../FooterDahsboard";
import { Header, Main } from "./styles";
import { replaceCaracters } from "../../utils/helper";

const FoodPage = ({ handlePage }) => {
  const [search, setSearch] = useState("");
  const [id, setId] = useState(0);
  const [infos, setInfos] = useState(false);
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

  const showInfos = (id) => {
    setInfos(true);
    setId(id - 1);
  };

  return (
    <>
      {infos ? (
        <SellerPage setInfos={setInfos} product={products[id]} />
      ) : (
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
                return (
                  <SellerCard
                    key={item.id}
                    product={item}
                    showInfos={showInfos}
                  />
                );
              })}
            </ul>
          </Main>
          <FooterDash handlePage={handlePage} />
        </>
      )}
    </>
  );
};

export default FoodPage;
