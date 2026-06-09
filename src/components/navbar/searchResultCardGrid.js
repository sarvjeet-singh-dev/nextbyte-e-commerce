import {searchResult} from "./searchResultCard";
import { navState } from "../../state/navbarState";


export const searchResultCardGrid = () => {
    return navState.searchResult.map((product)=>{
        return searchResult(product)
    }).join("");
};