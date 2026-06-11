import { getElement } from "../dom/dom";
import { renderCartCount, renderCartLayout, renderCartUI } from "../render/renderCart";
import { totalCartPrice } from "../services/totalCartPrice";
import { cartState } from "../state/cartState";
import { storage } from "../utils/storage";
import { showNotification } from "../utils/showNotification";

const updatedCart = (products) => {
    cartState.cartItems = products;
    storage.set("cartItems",products);
    totalCartPrice();
    renderCartUI();
    renderCartCount();
    cartEvents();
};


const proceedToCheckout = () => {
    const elements = getElement();

    if(!elements.proceedToCheckoutBtn)return;

    elements.proceedToCheckoutBtn.addEventListener("click",()=>{
        showNotification("This Page is in Development Phase","You Can Check Other options")
    });

};

export const cartEvents = () => {

    proceedToCheckout();

    const elements = getElement();

    if(cartState.cartItems.length === 0) return;
    
    elements.cartProducts.addEventListener("click",(e) => {
        const selectedElem = e.target;

        const removeBtn = selectedElem.closest(".cart-btn-remove");
        const incrementBtn = selectedElem.closest(".cart-btn-increment");
        const decrementBtn = selectedElem.closest(".cart-btn-decrement");

        if(removeBtn){

            if(!selectedElem) return;

            const productId = Number(removeBtn.dataset.id);

            const selectedProduct = cartState.cartItems.filter((product) => product.id !== productId);
            const removedProduct = cartState.cartItems.filter((product) => product.id === productId);
       
            updatedCart(selectedProduct);

            showNotification("Product Removed From Cart",`${removedProduct[0].title}`);
            
        };

        if(incrementBtn){
            if(!selectedElem) return;

            const productId = Number(incrementBtn.dataset.id);

            const selectedProduct = cartState.cartItems.find((product) => product.id === productId);

            const updatedQty = cartState.cartItems.map((product)=>{
                if(product.id === productId){
                    const increasingQty = product.qty + 1;
                    return {...product,qty:increasingQty}
                }
                return product
            });

            updatedCart(updatedQty);
        };


        if(decrementBtn){
            if(!selectedElem) return;

            const productId = Number(decrementBtn.dataset.id);

            const selectedProduct = cartState.cartItems.find((product)=> product.id === productId);

            const updatedQty = cartState.cartItems.map((product)=>{
                if(product.id === productId){
                    const decreasingQty = product.qty - 1;
                    if(product.qty >1){
                        return {...product,qty:decreasingQty};
                    }
                };
                return product;
            });

            updatedCart(updatedQty);
        };
    });

};