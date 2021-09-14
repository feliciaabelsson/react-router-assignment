// import Nav from "./Nav";
// import MenuItems from "./MenuItems";
import "../styles/menu.css";
//import React, { Component } from "react";
import { connect } from "react-redux";

//import add from "../assets/add.svg";
import { addToCart, GetNumberCart } from "./actions/index.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import Nav from "./Nav";

const Menu = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const dispatch = useDispatch();
  console.log(coffeeData);

  //   console.log(coffeeData.menuState.total);
  //const orderData = useSelector((state) => {return state})
  //  console.log(orderData);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/beans", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      const data = await response.json();
      setCoffeeData(data);
    }
    fetchData();
  }, []);

  const handleClick = (item) => {
    //Kolla så varukorgen är tom eller ej
    dispatch(addToCart(item));
    // console.log("klicked" + item.title);

    // dispatch(GetNumberCart(total));
    // console.log("antal kafffe:");
  };

  return (
    <div>
      <Nav />
      <section className="menu-container">
        <h1>Meny</h1>
        {coffeeData.map((coffee, index) => (
          <section key={index} className="menu-section">
            <button
              className="add-sign"
              onClick={() => {
                handleClick(coffee);
              }}
            >
              +
            </button>
            <MenuItems data={coffee} key={index} />
          </section>
        ))}
      </section>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     menuState: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => {
//       dispatch(addToCart(id));
//     },
//   };
//};

//export default Menu;
export default Menu;

// const mapStateToProps = (state)=>{
//     return {
//       items: state.items
//     }
//   }

//   const mapDispatchToProps= (dispatch)=>{

//     return{
//         addToCart: (id)=>{dispatch(addToCart(id))}
//     }
// }

//   export default connect(mapStateToProps, mapDispatchToProps)(Menu)
//Hämta info från api

//presentera det genom att skicka ner props till menuItems

// const Menu = () => {
//     //kör en require för att hämta info från json

//     //let coffees = require('../assets/coffees.json');
//     return (
//         <section className="menu-container">
//             {/* <Nav /> */}
//             <h1>Meny</h1>
//             {/* {
//             coffees.map((coffee, index) => <MenuItems key={index} data={coffee} />)
//              } */}
//         </section>
//      );
// }

// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             coffeeData: []
//         }
//     }

//     componentDidMount() {
//         fetchData();
//     }

//     fetchData = () => {
//         fetch('http://localhost/api/beans')
//         .then(response => response.json())
//         .then(result => {
//             this.setState({coffeeData: result})
//         })
//         .catch(e => {
//             console.log(e);;
//         });
//     }

//     handleClick = (id) => {
//         this.props.addToCart(id);
//         console.log('klicked' + id)
//     }

//     render() {
//         let coffeeList = this.state.coffeeData.map(item => {
//             return (
//                 <article className="menu-item-container" key={item.id}>

//                     <aside>
//                         <img src={add} className="add-sign" alt="add" onClick={() => { this.handleClick(item) }} />
//                     </aside>
//                     <section className="add-coffe-container">
//                         <section className="coffee-title-price">
//                             <h3>{item.title}</h3>
//                             <h3>{item.price + ' kr'}</h3>
//                         </section>

//                         <aside className="coffee-desc">
//                             <p>{item.desc}</p>
//                         </aside>

//                     </section>

//                 </article>
//             );
//         })
//         return (
//             <div className="menu-container">
//                 <h1>Meny</h1>
//                 <div className="box">
//                     {coffeeList}
//                 </div>
//             </div>
//         )

//     }
// }
