import { cartState } from "../../state/cartState";
import { cartItems } from "./cartItem";

export const cartGrid = () => {

    if(cartState.cartItems.length !==0){
        return cartState.cartItems.map((product)=>{
             return cartItems(product); 
         }).join("");
    };

};