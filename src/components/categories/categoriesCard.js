export const categoriesCard = (category) => {
    return `
    <div id="${category.id}" data-name="${category.title}" class="categories-cards group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-2xl">
        <img src="${category.image}" alt="${category.title}" class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110  ">
        <div class="absolute bottom-2 left-0 right-0 border border-white/10 bg-black/50 p-2">
        <h3 class="text-white text-center text-lg font-semibold tracking-wide"> ${category.title} </h3>
        </div>
    </div> 
    `;
};