export const cartSection = () => {
    
    return `
    <!-- Heading -->
    <div class="mb-10">
        <p class="uppercase tracking-[0.3em] text-sm text-red-400">SHOPPING CART</p>

        <h1 class="text-4xl md:text-5xl font-bold mt-3">Review Your Tech Setup</h1>

        <p class="text-gray-400 mt-4 max-w-2xl">Manage your selected premium technology products before checkout.</p>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 ">

        <!-- LEFT SIDE -->
        <div id="cart-products" class="lg:col-span-2 flex flex-col gap-6 "></div>

        <!-- RIGHT SIDE -->
        <div>

            <!-- SUMMARY BOX -->
            <div class="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

                <h3 class="text-2xl font-bold mb-6">Order Summary</h3>

                <!-- Summary Rows -->
                <div class="flex flex-col gap-4">

                    <div class="flex items-center justify-between text-gray-400">
                        <p>Subtotal</p>
                        <p id="cart-total-price">₹2,69,998</p>
                    </div>

                    <div class="flex items-center justify-between text-gray-400">
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>

                    <div class="flex items-center justify-between text-gray-400">
                        <p>Tax</p>
                        <p>₹5,000</p>
                    </div>

                </div>

                <!-- Divider -->
                <div class="w-full h-px bg-white/10 my-6"></div>

                <!-- Total -->
                <div class="flex items-center justify-between">

                    <p class="text-xl font-semibold">Total</p>

                    <p id="cart-final-total" class="text-3xl font-bold text-red-400">₹2,74,998</p>

                </div>

                <!-- Checkout Button -->
                <button id="proceed-to-checkout" class="w-full mt-8 bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 active:scale-95 cursor-pointer">Proceed To Checkout</button>

                <!-- Continue Shopping -->
                <a href="/index.html#featured-products" class="w-full block text-center mt-4 border border-white/10 hover:border-red-400 py-4 rounded-xl transition-all duration-300 cursor-pointer">Continue Shopping</a>

            </div>

        </div>

    </div>`
};