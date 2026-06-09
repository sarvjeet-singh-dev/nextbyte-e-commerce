export const searchResult = (product) => {
    return `
        <div data-id="${product.id}" class="search-result-cards flex items-center gap-5 px-5 py-3 hover:bg-red-600 rounded-xl hover:scale-105 transition-all duration-200">
            <img src="${product.images[0]}" alt="${product.title}" class="w-20 h-20">
            <p>${product.title}</p>
        </div>
    `;
}