import { productState } from "../../state/productState"
import { productCard } from "./productCard";

export const filterdProductsGrid = () => {
    return productState.filterdProducts.map((prod)=>{
        return productCard(prod);
    }).join("");
};


export const productGrid = () => {
    return productState.products.map((products)=>{
        return productCard(products)
    }).join("");
};
