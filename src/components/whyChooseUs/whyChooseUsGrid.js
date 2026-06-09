import { whyChooseUsCard } from "./whyChooseUsCard";
import { whyChooseUsData } from "../../data/whyChooseUsData";

export const whyChooseUsGrid = () => {
    
   return whyChooseUsData.map((data) => {
        return whyChooseUsCard(data);
    }).join("");
};
