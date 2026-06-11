export const footerSection = () => {
  
    return `
  <section class="relative overflow-hidden max-w-7xl mx-auto rounded-3xl border border-white/10 bg-[#070B14]">

    <!-- Ambient Glow -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-red-500/10 blur-3xl rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

    <div class="relative px-8 py-16">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <!-- Brand -->
        <div class="flex flex-col gap-5">

          <h3 class="text-3xl font-bold tracking-wide text-white">⚡NEXBYTE</h3>

          <p class="text-gray-400 leading-relaxed">Premium technology products curated for modern creators, gamers, and digital lifestyles.</p>

          <div class="flex items-center gap-4 text-xl text-gray-300">

            <a href="#" data-name="Instagram" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-instagram-fill"></i></a>

            <a href="#" data-name="Twitter" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-twitter-x-line"></i></a>

            <a href="#" data-name="Youtube" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-youtube-fill"></i></a>

            <a href="https://github.com/sarvjeet-singh-dev/nextbyte-e-commerce.git" target="blank" data-name="Github" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-github-fill"></i></a>

          </div>
        </div>

        <!-- Shop -->
        <div class="flex flex-col gap-5">

          <h4 class="text-xl font-semibold text-white">Shop</h4>

          <div id="shop-links-footer" class="flex flex-col gap-3">
            <a data-category="Laptops" href="#" class="footer-links text-gray-400 hover:text-red-400 transition-all duration-300">Laptops</a>
            <a data-category="Smartphones" href="#" class="footer-links text-gray-400 hover:text-red-400 transition-all duration-300">Smartphones</a>
            <a data-category="Tablets" href="#" class="footer-links text-gray-400 hover:text-red-400 transition-all duration-300">Tablets</a>
            <a data-category="Accessories" href="#" class="footer-links text-gray-400 hover:text-red-400 transition-all duration-300">Accessories</a>
            <a data-category="All" href="#" class="footer-links text-gray-400 hover:text-red-400 transition-all duration-300">Deals</a>
          </div>

        </div>

        <!-- Support -->
        <div class="flex flex-col gap-5">

          <h4 class="text-xl font-semibold text-white">Support</h4>

          <div class="flex flex-col gap-3">
            <a href="/nextbyte-e-commerce/#newsletter" class="text-gray-400 hover:text-red-400 transition-all duration-300">Contact</a>
            <a href="/nextbyte-e-commerce/#why-choose-us" class="text-gray-400 hover:text-red-400 transition-all duration-300">FAQ</a>
            <a href="/nextbyte-e-commerce/#why-choose-us" class="text-gray-400 hover:text-red-400 transition-all duration-300">Shipping</a>
            <a href="/nextbyte-e-commerce/#why-choose-us"class="text-gray-400 hover:text-red-400 transition-all duration-300">Returns</a>
            <a href="/nextbyte-e-commerce/#why-choose-us" class="text-gray-400 hover:text-red-400 transition-all duration-300">Privacy Policy</a>
          </div>

        </div>

        <!-- Contact -->
        <div class="flex flex-col gap-5">

          <h4 class="text-xl font-semibold text-white">Contact</h4>

          <div class="flex flex-col gap-3 text-gray-400">
            <p>support@nexbyte.com</p>
            <p>Mohali, Punjab</p>
            <p>24/7 Customer Support</p>
          </div>

        </div>

      </div>

      <!-- Bottom Footer -->
      <div class="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

        <p>© 2026 NEXBYTE. All rights reserved.</p>

        <p> Built with Vite + Tailwind CSS</p>

      </div>

    </div>

  </section>
`
}