import { getElement } from "../dom/dom";
import { showNotification } from "../utils/showNotification";

export const newsLetterEvents = () => {
    const elements = getElement();

    elements.newsletterForm.addEventListener("submit", (e) => {
        
        e.preventDefault();
        
        const inputs = elements.newsLetterInput.value.trim();

        showNotification(
            "Subscribed!", 
            `Thank you! ${inputs} has been successfully registered.`, 
            2000
        );

        elements.newsletterForm.reset(); 
    });
};