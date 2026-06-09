import { getElement } from "../dom/dom";
import { renderDetailsLayout } from "../render/renderDetailsPage";
import { navbarSearchRender, renderUI } from "../render/renderUI";
import { detailsPageState } from "../state/detailsPageState";
import { navState } from "../state/navbarState";
import { productState } from "../state/productState";
import { storage } from "../utils/storage";


export const navEvents = () => {
    const elements = getElement();

    document.addEventListener("click",(e)=>{

        if(e.target.closest(".closing-nav-outside")){
            navState.isMenuOpen = false;
            renderUI();
            return;
        };
        
        
        if (!elements.headerContainer.contains(e.target)) {
            
            navState.isMenuOpen = false;
            renderUI();
            
        };


        if(!e.target.closest(".search-input")){

            navState.isSearchMenuOpen = false;
            navbarSearchRender();

        };  

    });

    elements.menuButton.addEventListener("click", () => {

        navState.isMenuOpen = !navState.isMenuOpen;

        renderUI();

    });

    elements.searchInput.forEach((inputs)=>{

        inputs.addEventListener("focus",()=>{
            navState.isSearchMenuOpen = true;

            productState.products = storage.get("products");
            
            navbarSearchRender();
        });
        
        inputs.addEventListener("input",(e)=>{

            const query = e.target.value.trim().toLowerCase();

            navState.searchQuery = query;
            
            if(query === ""){
                navState.searchResult = [];
                navbarSearchRender();
                return;
            };

            const searchResults = productState.products.filter((product) => {
               
                const matchTitle = product.title.toLowerCase().includes(query);

                const matchCategory = product.category.toLowerCase().includes(query);

                return matchTitle || matchCategory;
            
            });

            navState.searchResult = searchResults;

            navbarSearchRender();

        });

    });

    elements.searchResult.forEach((result)=>{
        
        result.addEventListener("click",(e)=>{

            const selectedResultCard = e.target.closest(".search-result-cards");

            const productId = Number(selectedResultCard.dataset.id);

            const matchedProduct = navState.searchResult.find( (product) => product.id === productId);

            if(matchedProduct){
                const productCopy = {...matchedProduct};

                detailsPageState.itemDetails = productCopy;

                storage.set("productDetails",productCopy);

                window.location.href = "/src/pages/productDetailsPage.html";
            };

        });
    });

};