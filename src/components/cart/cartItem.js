export const cartItems = (product) => {

    const image = product.images[0];

    const formattedPrice = product.price.toLocaleString("en-IN");

    return`
     <!-- CART CARD -->
    <div class="flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-red-400 transition-all duration-300">

        <!-- Product Image -->
        <div class="w-full md:w-56 overflow-hidden rounded-xl">
            <img src="${image}" alt="Laptop" class="w-full h-full object-cover">
        </div>

        <!-- Product Info -->
        <div class="flex flex-col justify-between flex-1">

            <div>
                <p class="uppercase text-xs tracking-[0.2em] text-red-400">${product.category}</p>
                <h2 class="text-2xl font-semibold mt-2">${product.title}</h2>
                <p class="text-gray-400 mt-3">${product.description}</p>
            </div>

            <!-- Bottom Row -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">

                <!-- Price -->
                <div>
                    <p class="text-3xl font-bold">₹ ${formattedPrice}</p>
                </div>

                <!-- Quantity -->
                <div class="flex items-center gap-3">

                    <button class="cart-btn-decrement w-10 h-10 rounded-lg border border-white/10 hover:bg-red-500 transition-all duration-300 active:scale-95 cursor-pointer" data-id="${product.id}">
                        -
                    </button>

                    <span class="count-display text-lg font-semibold">
                        ${product.qty}
                    </span>

                    <button class="cart-btn-increment w-10 h-10 rounded-lg border border-white/10 hover:bg-red-500 transition-all duration-300 active:scale-95 cursor-pointer" data-id="${product.id}">
                        +
                    </button>
                </div>

                <!-- Remove -->
                <button class="cart-btn-remove text-red-400 hover:text-red-500 transition-all duration-300 cursor-pointer" data-id="${product.id}">Remove</button>

            </div>

        </div>

    </div>`
};