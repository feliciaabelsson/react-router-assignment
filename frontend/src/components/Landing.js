import "../styles/landing.css";
import logo from "../assets/airbean-landing.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Link to="/menu">
      <section className="landing-page-container">
        <img src={logo} alt="logotype" />
      </section>
    </Link>
  );
};

export default Landing;
