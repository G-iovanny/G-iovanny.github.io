import Header from "../components/Header";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header />
      <div className="error__container">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/home" className="error__return">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
