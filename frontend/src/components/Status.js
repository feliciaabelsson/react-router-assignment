import "../styles/status.css";
import "../styles/main.css";
import image from "../assets/drone.svg";
import { Component } from "react";
import { Link } from "react-router-dom";

const randomString = require("random-string");

const orderNumber = randomString({
  length: 8,
  numeric: true,
  letters: true,
  special: false,
});

class Status extends Component {
  state = {
    minutes: 13,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes } = this.state;
    return (
      <section className="status-container">
        <p className="order-number">
          Ordernummer:
          <span className="order-number-span">
            <b>#{orderNumber}</b>
          </span>
        </p>
        <img src={image} alt="drone" />
        <h1>Din beställning är på väg!</h1>
        <p className="count-down">
          <b>{minutes}</b> minuter
        </p>

        <Link to="/">
          <button className="button button-status">Ok, cool!</button>
        </Link>
      </section>
    );
  }
}

export default Status;

// const Status = () => {

//   return (
//     <section className="status-container">
//       <p>Ordernummer</p>
//       <img src={image} alt="drone" />
//       <h1>Din beställning är på väg!</h1>
//       <h4>{iterate}</h4>

//       <button className="button">Ok, cool!</button>
//     </section>
//   );
// };

// export default Status;
