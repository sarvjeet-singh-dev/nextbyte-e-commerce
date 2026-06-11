export const emptyCart = () => {
    return `
        <div class="flex flex-col justify-center items-center gap-6 h-[30vh]">
            <h1 class="text-2xl font-bold flex justify-center items-center" >Your Cart is empty</h1>
            <p class="text-lg text-gray-600 ">Your cart is waiting for something amazing.</p>
            <a href="/nextbyte-e-commerce/#featured-products" class="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer active:scale-95 hover:bg-red-600 transition-colors duration-300">Start Shopping</a>
        </div>
        `;
}