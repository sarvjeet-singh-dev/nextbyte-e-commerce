import { detailsPageState } from "../../state/detailsPageState";
import { storage } from "../../utils/storage";
import { reviewsCard } from "./reviewsCard";


export const reviewsCardgrid = () => {
    const getProductFromLS = storage.get("productDetails");
    detailsPageState.itemDetails = getProductFromLS;

    const product = detailsPageState.itemDetails;

    const reviews = product.reviews.map((product)=>{
        return reviewsCard(product)
    }).join("");

    return reviews
};