export const Navbar = () => {
    return `
    <div class="relative w-full">

      <!-- Main Flex Container -->
      <div class="flex items-center justify-between w-full gap-4">

        <!-- Left Side: Menu Button, Logo, Desktop Nav -->
        <div class="flex items-center gap-4">
          <button
            id="menu-button"
            class="lg:hidden active:scale-95 cursor-pointer text-xl"
            aria-label="Toggle navigation menu"
          >
            <i class="ri-menu-5-line"></i>
          </button>

          <a
            href="/nextbyte-e-commerce"
            class="text-red-400 font-bold tracking-wide text-lg sm:text-xl whitespace-nowrap"
          >
            ⚡ NEXBYTE
          </a>

          <!-- Desktop Menu -->
          <nav class="hidden lg:block">
            <ul class="flex items-center gap-8 ml-4">
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce">Home</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce#featured-products">Products</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce#categories">Categories</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce#featured-products">Deals</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce#why-choose-us">About</a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Desktop Search -->
        <div
          id="nav-search-container"
          class="hidden lg:flex relative flex-1 max-w-md mx-6"
        >
          <i
            class="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          ></i>
          <input
            id="nav-search-input"
            type="text"
            placeholder="Search products, brands..."
            class="search-input w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-white placeholder-gray-400"
            autocomplete="off"
          />
          <div class="search-results absolute left-0 w-full max-w-md mx-auto mt-15 bg-[#0B1120]/95 backdrop-blur-md border border-white/10 rounded-lg p-4 opacity-0 pointer-events-none transition-all duration-300 z-50 max-h-100 overflow-y-auto">
            
          </div>

        </div>


        <!-- Cart -->
        <div class="relative shrink-0">
          <a
            href="/nextbyte-e-commerce/src/pages/cartPage.html"
            class="text-xl active:scale-95 cursor-pointer inline-block"
            aria-label="View shopping cart"
          >
            <i class="ri-shopping-cart-2-fill"></i>
          </a>
          <span
            id="cart-count"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold"
          >
            0
          </span>
        </div>

      </div>

      <!-- Mobile Search -->
      <div class="lg:hidden mt-4">
        <div class="relative">
          <i
            class="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          ></i>
          <input
            type="text"
            placeholder="Search products..."
            class="search-input w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-white placeholder-gray-400"
            autocomplete="off"
          />
        </div>

        <div class="search-results absolute left-0 w-full max-w-sm mx-auto mt-6 bg-[#0B1120]/95 backdrop-blur-md border border-white/10 rounded-lg p-4 opacity-0 pointer-events-none transition-all duration-300 z-50 h-50 overflow-y-auto"></div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div
        id="navbar-menu"
        class="absolute top-full left-0 w-full overflow-hidden max-h-0 opacity-0 transition-all duration-300 bg-[#0B1120]/95 backdrop-blur-md lg:hidden z-50 border-t border-white/10"
      >
        <ul class="flex flex-col items-center gap-6 py-6">
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce">Home</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce#featured-products">Products</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce#categories">Categories</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce#featured-products">Deals</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce#why-choose-us">About</a>
          </li>
        </ul>
      </div>

    </div>
    `;
};