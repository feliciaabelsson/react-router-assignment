import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  GET_NUMBER_CART,
  UPDATE_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from "../actions/action-types/cart-actions";

const initState = {
  total: 0,
  addedItems: [],
  _products: [],
  totalCost: 0,
  totalAmount: 0,
};

function cartReducer(state = initState, action) {
  console.log(state);
  console.log(state);

  // console.log("quantity" + state.addedItems.quantity);

  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
        totalAmount: state.addedItems.length,
      };

    case ADD_TO_CART:
      //om state.total är noll lägger den till 1 av den som

      let cart = {
        id: action.payload.id,
        quantity: 1,
        name: action.payload.title,
        price: action.payload.price,
      };
      //pushar items in i addedItems array
      state.addedItems.push(cart);
      console.log("totala:" + state.totalAmount);

      let existed_item = state.addedItems;

      if (existed_item) {
        return {
          ...state,
          totalAmount: state.totalAmount + 1,
          total: state.quantity + state.addedItems.price,
        };
      } else {
        let newTotal = state.quantity + state.addedItems.price;
        return {
          ...state,
          total: newTotal,
        };
      }

    case ADD_QUANTITY:
      state.addedItems.map((item) => {
        console.log(item.quantity);
        // console.log("addeds" + state.addedItems);
        item.quantity++;
      });

      state.totalAmount++;

      //   state.addedItems.quantity++;

      return {
        ...state,
      };

    case SUB_QUANTITY:
      // let quantity = state.addedItems.quantity;
      // if (quantity > 1) {

      //   state.addedItems.quantity--;
      // }

      state.addedItems.map((item) => {
        console.log(item.quantity);
        // console.log("addeds" + state.addedItems);
        item.quantity--;
      });
      state.totalAmount--;
      return {
        ...state,
      };
  }

  return state;
}

export default cartReducer;

//     else {
//     //         let check = false;
//     //         state.addedItems.map((item) => {
//     //             if(item.id == action.payload.id) {
//     //                 state.addedItems.quantity++;
//     //                 check= true;
//     //             }
//     //         });

//     let item = {
//       id: action.payload.id,
//       quantity: 1,
//       name: action.payload.title,
//       price: action.payload.price,
//     };
//     //pushar items in i addedItems array
//     state.addedItems.push(item);

//     const inCart = state.addedItems.find((item) =>
//       item.id === action.payload.id ? true : false
//     );

//   return {
//       ...state,
//       addedItems: inCart
//       ? state.addedItems.map((item) =>
//       item.id === action.payload.id
//       ? {...item, quantity: item.quantity +1 }
//       : item )
//       : [...state.addedItems, {...item, quantity: 1}],
//   };

//           if(!check) {
//               let _cart = {
//                   id: action.payload.id,
//                   quantity: 1,
//                   name: action.payload.title,
//                   price: action.payload.price
//               }
//               state.addedItems.push(_cart);
//           }

// function handleChange(state, change){
//     const {total, _products} = state;
//     return({
//         total: total + change,
//         _products: [total + change, ..._products]
//     })
// }

// function Counter() {
//     const [counter, setCounter] = useState(0);

//     const increment = () => {
//         setCounter(total => total +1)
//     }
//     console.log(total)
// }

//INSIDE HOME COMPONENT
// if (action.type === ADD_TO_CART) {
//     let addedItem = state.addedItems.find(item => item.id === action.payload.id)
//     //check if the action id exists in the addedItems
//     let existed_item = state.addedItems.find(item => action.payload.id === item.id)
//     if (existed_item) {
//         addedItem.quantity += 1
//         return {
//             ...state,
//             total: state.total + addedItem.price
//         }
//     }
//     else {
//         addedItem.quantity = 1;
//         //calculating the total
//         let newTotal = state.total + addedItem.price

//         return {
//             ...state,
//             addedItems: [...state.addedItems, addedItem],
//             total: newTotal
//         }

//     }
// }
// else {
//     return state
// }
