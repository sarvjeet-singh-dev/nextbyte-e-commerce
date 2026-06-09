import { cartItems } from "../components/cart/cartItem";
import { getElement } from "../dom/dom";
import { renderCartCount } from "../render/renderCart";
import { renderDetailsLayout, renderImageGallary } from "../render/renderDetailsPage";
import { cartState } from "../state/cartState";
import { detailsPageState } from "../state/detailsPageState";
import { productState } from "../state/productState";
import { storage } from "../utils/storage";
import { showNotification } from "../utils/showNotification";



export const productDetailsEvents = () => {
    const elements = getElement();

    elements.addToCart.onclick = () => {

        const product = detailsPageState.itemDetails;

        const newProduct = { ...product,qty:1 };

        const isDuplicate = cartState.cartItems.find((item) => item.id === product.id);

        if(isDuplicate){

            cartState.cartItems =  cartState.cartItems.map((item)=>{

                if(item.id === product.id){
                    
                    return {...item, qty : item.qty + 1};
                };

                return item;
            });

            showNotification("Product Again Added To Cart",`${newProduct.title}`);
            
        }else{
            cartState.cartItems = ([...cartState.cartItems,newProduct]);
            showNotification("Added To Cart",`${newProduct.title}`);
        };

        storage.set("cartItems",cartState.cartItems);

        renderCartCount();

    };


    elements.imageGallary.onpointerover = (e) => {
        
        const selectedImage = e.target;

        if(!selectedImage.matches(".small-product-image")) return;

        const imageSrc = selectedImage.src;

        detailsPageState.itemMainImage = imageSrc;

        elements.mainImage.src = imageSrc
                
    };
        

};