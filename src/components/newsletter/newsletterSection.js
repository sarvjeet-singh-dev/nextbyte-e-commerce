export const newsLetterSection = () => {
    return `

    <div>
        <form id="newsletter-form" class="flex flex-col justify-center items-center gap-6 bg-gray-900 max-w-3xl rounded-2xl px-6 py-6">
            <p class="uppercase leading-tight text-red-400">STAY UPDATED</p>
            <h3 class="font-bold leading-tight text-2xl ">Get The Latest Tech Updates</h3>
            <p>Subscribe to receive product launches, exclusive offers, and curated technology updates directly in your inbox.</p>
            <div class="flex flex-col md:flex-row md:gap-5">
            <input id="news-letter-input" type="email" placeholder="Enter your email" class="w-full md:w-auto px-4 py-2 rounded-lg bg-white/5 border border-white/10  focus:outline-none" required autocomplete="off">
            <button type="submit" id="news-letter-subscribe-btn" class="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 mt-4 md:mt-0 active:scale-95 cursor-pointer transition-all duration-300">Subscribe</button>
            </div>
        </form>
    </div>`;
};