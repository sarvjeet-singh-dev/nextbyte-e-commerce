import { cartState } from "../state/cartState";

export const totalCartPrice = () => {
    const totalPrice = cartState.cartItems.reduce((acc,product)=>{
        return acc = (product.price * product.qty) + acc;
    },0);

    cartState.totalPrice = totalPrice;
};