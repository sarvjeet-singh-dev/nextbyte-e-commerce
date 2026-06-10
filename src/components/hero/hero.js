import heroImage from "/src/assets/images/hero/HeroImage.jpeg";

export const Hero = () => {
    return `
    <!--Ambient Glow Effect--> 
    <div class="absolute top-0 left-0 w-72 h-72 bg-red-500/10 blur-3xl rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
    <section id="hero-left-section" class="flex flex-col items-center md:items-start text-center md:text-left">
        <p class="uppercase tracking-[0.3em] text-sm text-red-400">NEXT GENERATION TECH STORE</p>
        <h1 class="text-5xl lg:text-7xl font-bold leading-tight">Premium Tech For Modern Creators</h1>
        <p class="max-w-xl">Discover premium laptops, smartphones, tablets, and accessories designed for creators, professionals, and digital lifestyles.</p>
        <div class="mt-6">
            <a href="/nextbyte-e-commerce#featured-products" class="px-6 py-3 transition-all duration-300 border hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer">Shop Now</a>
            <a href="/nextbyte-e-commerce#featured-products" class="px-6 py-3 transition-all duration-300 border hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer">Explore Deals</a>
        </div>
    </section>
    <section id="hero-right-section">
        <img src="${heroImage}" alt="Hero Image" class="w-full max-w-2xl rounded-2xl shadow-2xl object-cover border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition duration-300 ">
    </section>
    `;
};