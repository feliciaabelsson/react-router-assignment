import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "./actions/index";
import "../styles/cart.css";
import "../styles/main.css";
import up from "../assets/arrow-up.svg";
import down from "../assets/arrow-down.svg";
import Nav from "./Nav";

// import Recipe from './Recipe'
class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };

  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };

  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    const totalAmount = this.props.totalAmount;
    // console.log(totalAmount);
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-desc">
              <section className="item-title-quantity">
                <h3>{item.name}</h3>
                <div className="add-remove">
                  <img
                    src={up}
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  />
                  <p>{totalAmount}</p>
                  <img
                    src={down}
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  />
                </div>
              </section>
              <p className="item-price">{item.price} kr</p>
            </div>
          </li>
        );
      })
    ) : (
      <p>Varukorgen är.</p>
    );

    console.log(addedItems);
    return (
      <div>
        <Nav />
        <div className="cart-container">
          <div className="cart-items">
            <h2>Din beställning</h2>
            <ul className="collection">{addedItems}</ul>
            <h2 className="total-price">Total...summa</h2>
            <Link to="/status">
              <button className="button cart-button">Take my money!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    totalAmount: state.totalAmount,
    //addedItems: state.addedItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// export default Cart;

// const Cart = () => {
//   return (
//     <section className="cart-container">
//       <div className="cart-items">
//         <h2>Din Beställning</h2>

//         <ul className="shopping-cart-items">
//           <li>
//             <p>Kaffe</p>
//             <p>Antal</p>
//           </li>
//         </ul>

//         <h2>Total...summa</h2>

//         <button className="button cart-button">Take my money!</button>
//       </div>
//     </section>

//   );
// };

// const mapStateToProps = (state) => {
//   //console.log(state);
//   return {
//     items: state.addedItems,
//   };
// };

// export default connect(mapStateToProps)(Cart);

// import React, { Component } from 'react'
// import { connect } from "react-redux";
// // import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../actions';
// import { removeItem,addQuantity,subtractQuantity} from './actions/index'

// function Cart({items,removeItem,addQuantity,subtractQuantity}){
//   //  console.log(items)
//     let ListCart = [];
//     let TotalCart=0;
//     Object.keys(items.Carts).forEach(function(item){
//         TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
//         ListCart.push(items.Carts[item]);
//     });
//     function TotalPrice(price,tonggia){
//         return Number(price * tonggia).toLocaleString('en-US');
//     }

//     return(
//         <div className="row">
//             <div className="col-md-12">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th>Name</th>
//                         <th>Image</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Total Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     ListCart.map((item,key)=>{
//                         return(
//                             <tr key={key}>
//                             <td><i className="badge badge-danger" onClick={()=>removeItem(key)}>X</i></td>
//                             <td>{item.name}</td>
//                             <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
//                             <td>{item.price} $</td>
//                             <td>
//                                     <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>subtractQuantity(key)}>-</span>
//                                     <span className="btn btn-info">{item.quantity}</span>
//                                     <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>addQuantity(key)}>+</span>
//                             </td>
//                             <td>{ TotalPrice(item.price,item.quantity)} $</td>
//                         </tr>
//                         )
//                     })

//                 }
//                 <tr>
//                     <td colSpan="5">Total Carts</td>
//                     <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
//                 </tr>
//                 </tbody>

//             </table>
//             </div>
//         </div>
//     )
// }
// const mapStateToProps = state =>{
//    console.log(state)
//     return{
//         items:state._todoProduct
//     }
// }

// export default connect(mapStateToProps,{removeItem,addQuantity,subtractQuantity})(Cart)

/* <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    <img src={up} />
                  </i>
                </Link> */

/* <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    <img src={down} />
                  </i>
                </Link> */
// '

// <button
// className="waves-effect waves-light btn pink remove"
// onClick={() => {
//   this.handleRemove(item.id);
// }}
// >
// Remove
// </button>'

// const Cart = () => {
//   return (
//     <section className="cart-container">
//       <div className="cart-items">
//         <h2>Din Beställning</h2>

//         <ul className="shopping-cart-items">
//           <li>
//             <p>Kaffe</p>
//             <p>Antal</p>
//           </li>
//         </ul>

//         <h2>Total...summa</h2>

//         <button className="button cart-button">Take my money!</button>
//       </div>
//     </section>

//   );
// };

// function Cart({ items, removeItem, addQuantity, subtractQuantity }) {
//   console.log(items);

//   return (
//     <div className="shopping-cart">
//       <h2>Din Beställning</h2>

//       <ul className="shopping-cart-items">
//         <li>
//           <p>Item 1</p>
//           <p>Antal</p>
//         </li>
//       </ul>

//       <h2>Total...summa</h2>

//       <button className="btn">Take my money</button>
//     </div>
//   );
// }
