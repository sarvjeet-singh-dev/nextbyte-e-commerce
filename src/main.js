import { cartEvents } from "./events/cartEvents";
import { categoryEvents } from "./events/categorySectionEvents";
import { footerEvents } from "./events/footerEvents";
import { navEvents } from "./events/navEvents";
import { newsLetterEvents } from "./events/newsLetterEvents";
import { productDetailsEvents } from "./events/productDetailsEvent";
import { productEvents } from "./events/productEvents";
import { renderCartCount, renderCartLayout, renderCartUI } from "./render/renderCart";
import { renderDetailsLayout } from "./render/renderDetailsPage";
import { productComponents } from "./render/renderProducts";
import { renderLayoutUI, renderUI } from "./render/renderUI";
import { productDetailsLoadFromLS } from "./services/detailsProductLoad";
import { productApi } from "./services/productsApi";
import { restoreCart } from "./services/restoreCart";
import { totalCartPrice } from "./services/totalCartPrice";
import { cartState } from "./state/cartState";
import { storage } from "./utils/storage";

const isIndexPage = () => document.getElementById("home-page") !== null;
const isDetailsPage = () => document.getElementById("product-details-page") !== null;
const isCartPage = () => document.getElementById("cart-main-page") !== null;

const inti = async() => {
    
    restoreCart();
    totalCartPrice();
    renderCartCount();
    
    if(isIndexPage()){
        renderLayoutUI();
        renderUI();
        renderCartCount();
        navEvents()
        await productApi();
        productComponents();
        productEvents();
        categoryEvents();
        newsLetterEvents();
        footerEvents()
    };

    
    if(isCartPage()){
        renderCartUI();
        renderCartCount();
        navEvents();
        cartEvents();
        footerEvents();
    };
    
    
    if(isDetailsPage()){
        productDetailsLoadFromLS();
        renderDetailsLayout();
        renderCartCount();
        navEvents();
        productDetailsEvents();
        footerEvents();
    };
    
};

inti();