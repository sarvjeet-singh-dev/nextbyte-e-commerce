import { getElement } from "../dom/dom";
import { categoriesProductsRender } from "../render/renderProducts";
import { productState } from "../state/productState";
import {showNotification} from "../utils/showNotification"

export const footerEvents = () => {

    const elements = getElement();

    document.addEventListener("click",(e)=>{

        // Footer Shops links
        const footerShopLinks = e.target.closest(".footer-links");

        if(footerShopLinks){

            e.preventDefault();

            const categoryName = footerShopLinks.dataset.category;

            productState.selectedCategory = categoryName;

            categoriesProductsRender();

            window.location.href = "/nextbyte-e-commerce#featured-products";
        };

        // Footer Social Media Links
        const footerSocialLinks = e.target.closest(".social-links");

        if(footerSocialLinks){

            e.preventDefault();

            const btnName = footerSocialLinks.dataset.name;

            showNotification(`${btnName} Clicked!`," Implementation coming soon.",3000);
        };


    });

};