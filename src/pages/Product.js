import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import data from "../data/data.json";
import ListDropdown from "../components/ListDropdown";
import Dropdown from "../components/Dropdown";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const product = data.find((product) => product.id === id);

  return (
    <div>
      <Header />
      <section className="product__description">
        <div className="product__desc1">
          <h2>{product.title}</h2>
          <span>{product.location}</span>
        </div>

        <div className="product__desc2"></div>
      </section>

      <section className="product__infos">
        <Dropdown title="Description" description={product.description} />
        <ListDropdown product={product} />
      </section>
    </div>
  );
}

export default Product;
