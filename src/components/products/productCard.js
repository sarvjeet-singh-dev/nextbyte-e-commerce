export const productCard = (product) => {
    const roundedRating = Math.round(product.rating);

    const ratingIcons = Array.from({ length: roundedRating }).map(() => { return `<i class="ri-star-fill"></i>` }).join("");


    return `
    <div class="product-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-2xl" data-id="${product.id}">

        <!-- Product Badge -->
        <span class="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">${product.badge}</span>

        <!-- Product Image -->
        <div class="overflow-hidden aspect-square bg-black/20">
        <img src="${product.images[0]}"  alt="${product.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        </div>

        <!-- Product Content -->
        <div class="p-5">

            <!-- Category -->
            <p class="uppercase tracking-wide text-xs text-red-400">${product.category}</p>

            <!-- Product Title -->
            <h3 class="text-white text-lg font-semibold mt-2 line-clamp-2">${product.title}</h3>

            <!-- Rating -->
            <div class="flex items-center gap-1 mt-3 text-yellow-400 text-sm">

                    ${ratingIcons}

                <span class="text-gray-300 ml-2">${(product.rating).toFixed(1)}</span>

            </div>

            <!-- Price -->
            <div class="flex items-center gap-3 mt-4">

                <p class="text-white text-2xl font-bold">₹${product.price.toLocaleString('en-IN')}</p>
                <span class="text-gray-500 line-through">₹${product.price.toLocaleString('en-IN')}</span>

            </div>

            <!-- Button -->
            <button class="add-to-cart-btn w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-all duration-300 active:scale-95 cursor-pointer" data-id="${product.id}">
                Add To Cart
            </button>

        </div>

    </div>`
};