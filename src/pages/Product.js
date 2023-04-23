import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import data from "../data/data.json";
import ListDropdown from "../components/ListDropdown";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";

import starGrey from "../images/star-grey.svg";
import starOrange from "../images/star-orange.svg";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const product = data.find((product) => product.id === id);

  // Pour filtrer le prénom et le nom
  const fullName = product.host.name;
  const [firstName, lastName] = fullName.split(" ");

  // Pour calculer la note du produit
  const rating = parseInt(product.rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Si la note est supérieur à l'index de la boucle, on affiche une étoile orange
      stars.push(
        <img src={starOrange} alt="Étoile orange" key={`star-${i}`} />
      );
    } else {
      // Si la note est inférieur à l'index de la boucle, on affiche une étoile grise
      stars.push(<img src={starGrey} alt="Étoile grise" key={`star-${i}`} />);
    }
  }

  return (
    <div>
      <Header />
      <section className="product__description">
        <div className="product__desc1">
          <h2 className="product__title">{product.title}</h2>

          <span className="product__location">{product.location}</span>

          <div className="product__containerTags">
            {product.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>

        <div className="product__desc2">
          <div className="product__containerHost">
            <div className="product__hostName">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
            <div className="product__hostPicture">
              <img src={product.host.picture} alt={`${product.host.name}`} />
            </div>
          </div>

          <div className="product__rating">{stars}</div>
        </div>
      </section>

      <section className="product__infos">
        <Dropdown title="Description" description={product.description} />
        <ListDropdown product={product} />
      </section>
    </div>
  );
}

export default Product;
