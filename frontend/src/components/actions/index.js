import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, GET_NUMBER_CART, UPDATE_CART } from './action-types/cart-actions';

//add to cart action
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
//remove item action
export const removeItem=(item)=>{
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}
//subtract qt action
export const subtractQuantity=(item)=>{
    return{
        type: SUB_QUANTITY,
        payload: item
    }
}
//add qt action
export const addQuantity=(item)=>{
    return{
        type: ADD_QUANTITY,
        payload: item
    }
}


/*GET NUMBER CART*/
export function GetNumberCart(){
    return{
        type:GET_NUMBER_CART
    }
}

//Update cart
export function UpdateCart(payload){
    return {
        type:UPDATE_CART,
        payload
    }
}

