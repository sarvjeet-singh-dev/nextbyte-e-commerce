import { productComponents } from "../render/renderProducts";
import { productState } from "../state/productState";

import { getProductBadge } from "../utils/productBadges";
import { storage } from "../utils/storage";


export const productApi = async() => {

    try{
        productState.isLoading = true;
        productComponents();

        const urls = [
            "https://dummyjson.com/products/category/laptops",
            "https://dummyjson.com/products/category/smartphones",
            "https://dummyjson.com/products/category/tablets",
            "https://dummyjson.com/products/category/mobile-accessories",
        ]; 

        const response = await Promise.all(urls.map((url)=> fetch(url)) );
    
        
        const data = await Promise.all(
            response.map((response)=>{
    
            if(!response.ok){
                throw new Error("Failed to fetch products");
            };
    
            return response.json();
    
            })
        );
        const allProducts = data.flatMap((item)=> item.products);

        const finalProducts = allProducts.map((product)=>{
            
            const inrPrice = Math.round(product.price * 85);
            
            const oldPrice = Math.round(
                inrPrice + (inrPrice * product.discountPercentage / 100)
            );

            const productItem = {
                id:product.id,
                title:product.title,
                description:product.description,
                category:product.category,
                price:inrPrice,
                actualPrice:oldPrice,
                badge:getProductBadge(product.id),
                rating:product.rating,
                stock:product.stock,
                shippingInformation:product.shippingInformation,
                availabilityStatus:product.availabilityStatus,
                reviews: product.reviews,
                images:product.images,
                thumbnail:product.thumbnail,
                discountPercentage:product.discountPercentage,
            };

            return productItem;
        });

        productState.products = finalProducts;

        storage.set("products",finalProducts);
        
    }catch(error){
        console.error("Error fetching products:", error);
        throw new Error("Error fetching products:", error);
    }finally {
        productState.isLoading = false;
    };

};