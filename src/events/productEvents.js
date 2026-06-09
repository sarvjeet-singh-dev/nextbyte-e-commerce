import { getElement } from "../dom/dom";
import { renderCartCount } from "../render/renderCart";
import { renderDetailsLayout } from "../render/renderDetailsPage";
import { filterdProductRender, productComponents } from "../render/renderProducts";
import { productApi } from "../services/productsApi";
import { cartState } from "../state/cartState";
import { detailsPageState } from "../state/detailsPageState";
import { productState } from "../state/productState";
import { showNotification } from "../utils/showNotification";
import { storage } from "../utils/storage";

const updatedCart = (prod) => {
    cartState.cartItems = prod;
    storage.set("cartItems",prod);
    renderCartCount();
};

export const productEvents = () => {
    const elements = getElement();
    
    elements.featuredProducts.addEventListener("click",async (e)=>{

        const addToCartBtn = e.target.closest(".add-to-cart-btn");

        // Add to Cart Btn
        if(addToCartBtn){
            const productId = Number(addToCartBtn.dataset.id);
    
            const selectedProduct = productState.products.find((product)=> product.id === productId);
    
            const isDuplicate = cartState.cartItems.some((product) => product.id === productId);
    
            if(isDuplicate){
                const updatedProdQty = cartState.cartItems.map((product)=>{
    
                    if(productId === product.id){
    
                        const increasingQty = product.qty + 1;
                        return {...product,qty:increasingQty};
    
                    };
                    return product;
    
            });
                updatedCart(updatedProdQty);

                showNotification("Product Added Again To cart",`${selectedProduct.title}`);
    
            }else{
    
                const newProduct = {
                    id:selectedProduct.id,
                    category:selectedProduct.category,
                    title:selectedProduct.title,
                    description:selectedProduct.description,
                    price:selectedProduct.price,
                    images:selectedProduct.images,
                    qty:1,
                };
                
                updatedCart([...cartState.cartItems,newProduct]);

                showNotification("Added To cart",`${selectedProduct.title}`);
                
            };
        };

    });

    
    elements.productsCardGrid.addEventListener("click",(e)=>{

        const productCard = e.target.closest(".product-card");

        if(!productCard) return;

        if(!e.target.closest(".add-to-cart-btn")){
            const productId = Number(productCard.dataset.id);
    
            const selectedProduct = productState.products.find((product)=> product.id === productId);
    
            detailsPageState.itemDetails = selectedProduct;
    
            storage.set("productDetails",detailsPageState.itemDetails);
            
            window.location.href = "/src/pages/productDetailsPage.html";
    
            showNotification("Product Successfully Added");
        };

    });


    // Filtred Products
    
    const filterContainer = elements.productsFilter;

    const updateProductFilter = (category) => {
        const filterProducts = productState.products.filter(products => products.category === category );

        return filterProducts;
    };

    const categoryMap = {
        "Laptops": "laptops",
        "Smartphones": "smartphones",
        "Tablets": "tablets",
        "Accessories": "mobile-accessories"
    };

    filterContainer.addEventListener("change",()=>{
        const filterSelect = filterContainer.value;

        if(filterSelect === "All"){

            productState.filterdProducts = productState.products;
            
        }else{
            
            productState.filterdProducts = updateProductFilter(categoryMap[filterSelect]);
            
        };


        
        productState.selectedCategory = filterSelect;
        filterdProductRender();
    });
};