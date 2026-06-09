import { Navbar } from "../components/navbar/Navbar";
import { getElement } from "../dom/dom";
import { navState } from "../state/navbarState";
import { Hero } from "../components/hero/hero";
import { categoriesCard } from "../components/categories/categoriesCard";
import { categoriesSection } from "../components/categories/categorySection";
import { categoriesGrid } from "../components/categories/categoriesGrid";
import { whyChooseUsSection } from "../components/whyChooseUs/whyChooseUsSection";
import { whyChooseUsGrid } from "../components/whyChooseUs/whyChooseUsGrid";
import { promoBannerSection } from "../components/promoBanner/promoBannerSection";
import { newsLetterSection } from "../components/newsletter/newsletterSection";
import { footerSection } from "../components/footer/footerSection";
import { searchResult } from "../components/navbar/searchResultCard";
import { searchResultCardGrid } from "../components/navbar/searchResultCardGrid";

const elements = getElement();


export const renderLayoutUI = () => {

    elements.headerContainer.innerHTML = Navbar();
    elements.heroSection.innerHTML = Hero();
    elements.categories.innerHTML = categoriesSection();
    elements.whyChooseUs.innerHTML = whyChooseUsSection();
    elements.promoBanner.innerHTML = promoBannerSection();
    elements.newsletterSection.innerHTML = newsLetterSection();
    elements.footerSection.innerHTML = footerSection();

    const updatedElements = getElement();
    updatedElements.categoriesContainer.innerHTML = categoriesGrid();
    updatedElements.whyChooseUsRightSection.innerHTML = whyChooseUsGrid();

};


export const navbarSearchRender = () => {
    const elements = getElement();

    elements.searchResult.forEach((result) => {

        if (navState.isSearchMenuOpen && navState.searchQuery.length > 0) {

            result.classList.add("opacity-100", "pointer-events-auto");
            result.classList.remove("opacity-0", "pointer-events-none");
            
            if (navState.searchResult.length === 0) {
                result.innerHTML = "<p>No results found</p>";
                return;
            };

            if (navState.searchResult.length > 0) {
                result.innerHTML = searchResultCardGrid();
                return;
            };

        } else {
            result.classList.add("opacity-0", "pointer-events-none");
            result.classList.remove("opacity-100", "pointer-events-auto");
            result.innerHTML = "";
        }
    });
};

export const renderUI = () => {

    const elements = getElement();

    // Hamburger on mobile
    if(navState.isMenuOpen){
        elements.navbarMenu.classList.add("max-h-96","opacity-100");
        elements.navbarMenu.classList.remove("max-h-0","opacity-0");
    }else{
        elements.navbarMenu.classList.add("max-h-0","opacity-0");
        elements.navbarMenu.classList.remove("max-h-96","opacity-100");
    }
};


