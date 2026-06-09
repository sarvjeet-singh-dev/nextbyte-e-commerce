import { getElement } from "../dom/dom";
import { categoriesProductsRender, filterdProductRender } from "../render/renderProducts";
import { productState } from "../state/productState";


export const categoryEvents = () => {

    const elements = getElement();

    
    elements.categories.addEventListener("click",(e)=>{


        const selectedCard = e.target.closest(".categories-cards");

        if(!selectedCard) return; 

        productState.selectedCategory = selectedCard.dataset.name;

        categoriesProductsRender();
        
        window.location.href = "#featured-products";

    });
};