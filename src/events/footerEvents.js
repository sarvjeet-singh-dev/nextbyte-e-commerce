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

            const isIndexPage = () => document.getElementById("home-page") !== null;

            const categoryName = footerShopLinks.dataset.category;
            
            
            
            if(isIndexPage()){
                
                productState.selectedCategory = categoryName;
    
                categoriesProductsRender();
                
                document.getElementById("featured-products")?.scrollIntoView({behavior: "smooth"});
                
            }else{
                
                sessionStorage.setItem(
                    "selectedCategory",
                    categoryName
                );

                window.location.href =
                    "/nextbyte-e-commerce/#featured-products";
            }
        };

        // Footer Social Media Links
        const footerSocialLinks = e.target.closest(".social-links");

        if(footerSocialLinks){

            const btnName = footerSocialLinks.dataset.name;

            showNotification(`${btnName} Clicked!`," Implementation coming soon.",3000);
        };


    });

};