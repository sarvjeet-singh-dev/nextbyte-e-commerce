import promoBanner from "/src/assets/images/promo/promo-banner.jpeg"

export const promoBannerSection = () => {
    return `
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-3xl overflow p-8 md:p-14">
        <section id="promo-banner-left-section" class="flex flex-col gap-3 justify-center md:justify-start">
          <p class="uppercase leading-tight text-red-400">LIMITED TIME COLLECTION</p>
          <h3 class="text-2xl md:text-4xl lg:text-6xl leading-tight font-bold">Upgrade Your Digital Lifestyle</h3>
          <p class="text-gray-400">Explore carefully curated technology products built for productivity, entertainment, and modern digital experiences.</p>
          <div class="flex gap-2 justify-center md:justify-start">
            <a href="/nextbyte-e-commerce/#categories" class="border p-2 active:scale-95 cursor-pointer hover:bg-red-500 transition-all duration-300">Explore Collection</a>
            <a href="/nextbyte-e-commerce/#featured-products" class="border p-2 active:scale-95 cursor-pointer hover:bg-red-500 transition-all duration-300">View Deals</a>
          </div>
        </section>
        <section id="promo-banner-right-section" class="flex items-center justify-center">
          <img src="${promoBanner}" alt="Promo Banner Image" class="w-full h-full min-h-100 object-cover rounded-2xl">
        </section>
    </section>`;
};