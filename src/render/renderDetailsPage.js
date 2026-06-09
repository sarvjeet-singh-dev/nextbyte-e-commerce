import { footerSection } from "../components/footer/footerSection";
import { Navbar } from "../components/navbar/Navbar";
import { prodDetailsSection } from "../components/productsDetailsPage/productsDetailsSection";
import { reviewsCardgrid } from "../components/productsDetailsPage/reviewsCardGrid";
import { getElement } from "../dom/dom";

export const renderDetailsLayout = () => {
    const elements = getElement();

    elements.headerContainer.innerHTML = Navbar();

    elements.productsDetails.innerHTML = prodDetailsSection();
    elements.footerSection.innerHTML = footerSection();

    const udpatedElements = getElement();

    udpatedElements.reviewsCardContainer.innerHTML = reviewsCardgrid();
};

export const renderImageGallary = () => {

    const elements = getElement();
    
    elements.productsDetails.innerHTML = prodDetailsSection()
}