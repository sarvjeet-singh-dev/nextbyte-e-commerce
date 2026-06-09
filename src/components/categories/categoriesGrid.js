import {categoriesData} from "../../data/categoriesData";
import { categoriesCard } from "./categoriesCard";

export const categoriesGrid = () => {
    return categoriesData.map((category) => {
        return categoriesCard(category);
    }).join("");
};