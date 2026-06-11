import { categoriesProductsRender } from "../render/renderProducts";
import { productState } from "../state/productState";

export const restoreSelectedCategory = () =>{

    const selectedCategory = sessionStorage.getItem("selectedCategory");

    if(!selectedCategory)return;

    sessionStorage.removeItem("selectedCategory");

    productState.selectedCategory = selectedCategory;

    categoriesProductsRender();

    document
    .getElementById("featured-products")
    ?.scrollIntoView({
        behavior: "smooth"
    });
};