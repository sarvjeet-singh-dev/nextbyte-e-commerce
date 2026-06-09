import { detailsPageState } from "../../state/detailsPageState";
import { storage } from "../../utils/storage";

export const productImages = () => {

    const product = detailsPageState.itemDetails;

    const images = product.images.map((img,ind)=>{
        return `
        <div class="w-20 h-20 border rounded-xl">
            <img src="${img}" alt="Product Image ${ind+1}" loading="lazy" class="small-product-image">
        </div>
        `
    }).join("");

    return images;

    };