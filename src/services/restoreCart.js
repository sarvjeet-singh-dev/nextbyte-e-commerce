import { cartState } from "../state/cartState";
import { storage } from "../utils/storage";

export const restoreCart = () =>{
    const data = storage.get("cartItems",[]);
    cartState.cartItems = data;

};