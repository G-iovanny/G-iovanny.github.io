import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import data from "../data/data.json";
import ListDropdown from "../components/ListDropdown";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const product = data.find((product) => product.id === id);

  return (
    <div>
      <Header />
      <ListDropdown product={product} />
    </div>
  );
}

export default Product;
