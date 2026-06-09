import { cartGrid } from "../components/cart/cartGrid";
import { cartSection } from "../components/cart/cartSection";
import { emptyCart } from "../components/cart/emptyCart";
import { footerSection } from "../components/footer/footerSection";
import { Navbar } from "../components/navbar/Navbar";
import { getElement } from "../dom/dom";
import { cartState } from "../state/cartState";
import { renderUI } from "./renderUI";


export const renderCartCount = () => {
    const elements = getElement();
    if(!elements.cartCount) return;

    elements.cartCount.innerHTML = cartState.cartItems.length;
};

export const renderCartLayout = () => {
    const elements = getElement();

    elements.headerContainer.innerHTML = Navbar();
    
    if(cartState.cartItems.length === 0){
        elements.cartPage.innerHTML = emptyCart();
    }else{
        elements.cartPage.innerHTML = cartSection();
        
        const updatedElements = getElement();
        
        updatedElements.cartProducts.innerHTML = cartGrid();
    };
    
    elements.footerSection.innerHTML = footerSection();

};

export const renderCartUI = () => {
    renderCartCount();
    renderCartLayout();
    
    const elements = getElement();

    if(cartState.cartItems.length !== 0){
        elements.cartTotalPrice.textContent = cartState.totalPrice.toLocaleString("en-IN");
        
        elements.cartFinalTotal.textContent = (cartState.totalPrice + 5000).toLocaleString("en-IN");
    }
};