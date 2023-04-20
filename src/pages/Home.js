import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import data from "../data/data.json";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <section className="home__section">
        <ul>
          {data.map((product) => (
            <li key={product.id} style={{ listStyleType: "none" }}>
              <Cards product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
