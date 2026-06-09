import { filterdProductsGrid, productGrid } from "../components/products/productGrid.js";
import { productsSection } from "../components/products/productsSection.js";
import { getElement } from "../dom/dom.js";
import { productState } from "../state/productState.js";
import { loadingSkeleton } from "../utils/loadingSkeleton .js";


export const filterdProductRender = () => {
    const elements = getElement();
    
    if(productState.isLoading) {
        elements.featuredProducts.innerHTML = loadingSkeleton();
        return 
    };
    
    if(productState.products.length === 0){
        elements.featuredProducts.innerHTML = `<p>No Products Found</p>`;
        return;
    };
    
    const updatedElements = getElement();
    
    if(productState.filterdProducts.length === 0){
        updatedElements.productsCardGrid.innerHTML = productGrid();
    }else{
        updatedElements.productsCardGrid.innerHTML = filterdProductsGrid();
    };
};

export const categoriesProductsRender = () => {
    const elements = getElement();

    if(productState.selectedCategory === "Creator Gear" || productState.selectedCategory === "Portable Tech"){

        elements.productsFilter.value = "Accessories";

    }else{
        elements.productsFilter.value = productState.selectedCategory;
    };

    elements.productsFilter.dispatchEvent(
        new Event("change")
    );

};


export const  productComponents = () => {
    const elements = getElement();
    
    if(productState.isLoading) {
        elements.featuredProducts.innerHTML = loadingSkeleton();
        return 
    };
    
    if(productState.products.length === 0){
        elements.featuredProducts.innerHTML = `<p>No Products Found</p>`;
        return;
    };
    
    elements.featuredProducts.innerHTML = productsSection();
    
    const updatedElements = getElement();
    
    updatedElements.productsCardGrid.innerHTML = productGrid();


};


