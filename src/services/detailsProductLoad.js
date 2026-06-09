import { detailsPageState } from "../state/detailsPageState";
import { storage } from "../utils/storage";

export const productDetailsLoadFromLS = () => {

    const getProductFromLS = storage.get("productDetails");

    detailsPageState.itemDetails = getProductFromLS;
};
