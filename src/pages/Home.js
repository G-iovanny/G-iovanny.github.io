import "../styles/PAGES/_Home.css";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import data from "../data/data.json";

function Home() {
  return (
    <div>
      <Header />
      <Banner
        titre="Chez vous, partout et ailleurs"
        source={require("../images/background.png")}
        textAlt="Bannière d'accueil"
      />
      <section className="home__section">
        <ul>
          {data.map((product) => (
            <li key={product.id} style={{ listStyleType: "none" }}>
              <Cards product={product} />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
