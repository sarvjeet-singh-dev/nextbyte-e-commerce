(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=()=>({headerContainer:document.getElementById(`nav-container`),menuButton:document.getElementById(`menu-button`),navbarMenu:document.getElementById(`navbar-menu`),cartCount:document.getElementById(`cart-count`),searchInput:document.querySelectorAll(`.search-input`),searchResult:document.querySelectorAll(`.search-results`),heroSection:document.getElementById(`hero`),categories:document.getElementById(`categories`),categoriesContainer:document.getElementById(`categories-container`),featuredProducts:document.getElementById(`featured-products`),productsCardGrid:document.getElementById(`products-card-grid`),buttons:document.querySelectorAll(`.add-to-cart-btn`),productsFilter:document.getElementById(`products-filter`),whyChooseUs:document.getElementById(`why-choose-us`),whyChooseUsRightSection:document.getElementById(`why-choose-us-right-section`),promoBanner:document.getElementById(`promo-banner`),newsletterSection:document.getElementById(`newsletter`),newsletterForm:document.getElementById(`newsletter-form`),subscribeBtn:document.getElementById(`news-letter-subscribe-btn`),newsLetterInput:document.getElementById(`news-letter-input`),footerSection:document.getElementById(`footer-section`),footerShopLinks:document.getElementById(`shop-links-footer`),cartPage:document.getElementById(`cart-page`),cartProducts:document.getElementById(`cart-products`),cartTotalPrice:document.getElementById(`cart-total-price`),cartFinalTotal:document.getElementById(`cart-final-total`),decrementBtn:document.querySelectorAll(`.cart-btn-decrement`),incrementBtn:document.querySelectorAll(`.cart-btn-increment`),removeBtn:document.querySelectorAll(`.cart-btn-remove`),proceedToCheckoutBtn:document.getElementById(`proceed-to-checkout`),productsDetails:document.getElementById(`products-details`),reviewsCardContainer:document.getElementById(`review-cards`),addToCart:document.getElementById(`add-to-cart`),imageGallary:document.getElementById(`image-gallary`),mainImage:document.getElementById(`main-product-image`),imageGallaryContainer:document.getElementById(`image-gallary`)}),t={cartItems:[],totalPrice:null},n=e=>{let t=e.images[0],n=e.price.toLocaleString(`en-IN`);return`
     <!-- CART CARD -->
    <div class="flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-red-400 transition-all duration-300">

        <!-- Product Image -->
        <div class="w-full md:w-56 overflow-hidden rounded-xl">
            <img src="${t}" alt="Laptop" class="w-full h-full object-cover">
        </div>

        <!-- Product Info -->
        <div class="flex flex-col justify-between flex-1">

            <div>
                <p class="uppercase text-xs tracking-[0.2em] text-red-400">${e.category}</p>
                <h2 class="text-2xl font-semibold mt-2">${e.title}</h2>
                <p class="text-gray-400 mt-3">${e.description}</p>
            </div>

            <!-- Bottom Row -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">

                <!-- Price -->
                <div>
                    <p class="text-3xl font-bold">₹ ${n}</p>
                </div>

                <!-- Quantity -->
                <div class="flex items-center gap-3">

                    <button class="cart-btn-decrement w-10 h-10 rounded-lg border border-white/10 hover:bg-red-500 transition-all duration-300 active:scale-95 cursor-pointer" data-id="${e.id}">
                        -
                    </button>

                    <span class="count-display text-lg font-semibold">
                        ${e.qty}
                    </span>

                    <button class="cart-btn-increment w-10 h-10 rounded-lg border border-white/10 hover:bg-red-500 transition-all duration-300 active:scale-95 cursor-pointer" data-id="${e.id}">
                        +
                    </button>
                </div>

                <!-- Remove -->
                <button class="cart-btn-remove text-red-400 hover:text-red-500 transition-all duration-300 cursor-pointer" data-id="${e.id}">Remove</button>

            </div>

        </div>

    </div>`},r=()=>{if(t.cartItems.length!==0)return t.cartItems.map(e=>n(e)).join(``)},i=()=>`
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
                <a href="/nextbyte-e-commerce/index.html#featured-products" class="w-full block text-center mt-4 border border-white/10 hover:border-red-400 py-4 rounded-xl transition-all duration-300 cursor-pointer">Continue Shopping</a>

            </div>

        </div>

    </div>`,a=()=>`
        <div class="flex flex-col justify-center items-center gap-6 h-[30vh]">
            <h1 class="text-2xl font-bold flex justify-center items-center" >Your Cart is empty</h1>
            <p class="text-lg text-gray-600 ">Your cart is waiting for something amazing.</p>
            <a href="/index.html/#featured-products" class="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer active:scale-95 hover:bg-red-600 transition-colors duration-300">Start Shopping</a>
        </div>
        `,o=()=>`
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

            <button data-name="Instagram" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-instagram-fill"></i></button>

            <button data-name="Twitter" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-twitter-x-line"></i></button>

            <button data-name="Youtube" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-youtube-fill"></i></button>

            <a href="https://github.com/sarvjeet-singh-dev/nextbyte-e-commerce.git" data-name="Github" class="social-links hover:text-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"><i class="ri-github-fill"></i></a>

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
            <a href="/nextbyte-e-commerce/index.html#newsletter" class="text-gray-400 hover:text-red-400 transition-all duration-300">Contact</a>
            <a href="/nextbyte-e-commerce/index.html#why-choose-us" class="text-gray-400 hover:text-red-400 transition-all duration-300">FAQ</a>
            <a href="/nextbyte-e-commerce/index.html#why-choose-us" class="text-gray-400 hover:text-red-400 transition-all duration-300">Shipping</a>
            <a href="/nextbyte-e-commerce/index.html#why-choose-us"class="text-gray-400 hover:text-red-400 transition-all duration-300">Returns</a>
            <a href="/nextbyte-e-commerce/index.html#why-choose-us" class="text-gray-400 hover:text-red-400 transition-all duration-300">Privacy Policy</a>
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
`,s=()=>`
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
            href="/nextbyte-e-commerce/index.html"
            class="text-red-400 font-bold tracking-wide text-lg sm:text-xl whitespace-nowrap"
          >
            ⚡ NEXBYTE
          </a>

          <!-- Desktop Menu -->
          <nav class="hidden lg:block">
            <ul class="flex items-center gap-8 ml-4">
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce/index.html">Home</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce/index.html#featured-products">Products</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce/index.html#categories">Categories</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce/index.html#featured-products">Deals</a>
              </li>
              <li class="hover:text-red-400 transition-all duration-300">
                <a href="/nextbyte-e-commerce/index.html#why-choose-us">About</a>
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
            <a href="/nextbyte-e-commerce/index.html">Home</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce/index.html#featured-products">Products</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce/index.html#categories">Categories</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce/index.html#featured-products">Deals</a>
          </li>
          <li class="closing-nav-outside hover:text-red-400 transition-all duration-300 text-lg">
            <a href="/nextbyte-e-commerce/index.html#why-choose-us">About</a>
          </li>
        </ul>
      </div>

    </div>
    `,c={isMenuOpen:!1,isSearchMenuOpen:!1,searchQuery:``,searchResult:[],searchResultDetailsPage:void 0},l=`/nextbyte-e-commerce/assets/HeroImage-BnCkLkxp.jpeg`,u=()=>`
    <!--Ambient Glow Effect--> 
    <div class="absolute top-0 left-0 w-72 h-72 bg-red-500/10 blur-3xl rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
    <section id="hero-left-section" class="flex flex-col items-center md:items-start text-center md:text-left">
        <p class="uppercase tracking-[0.3em] text-sm text-red-400">NEXT GENERATION TECH STORE</p>
        <h1 class="text-5xl lg:text-7xl font-bold leading-tight">Premium Tech For Modern Creators</h1>
        <p class="max-w-xl">Discover premium laptops, smartphones, tablets, and accessories designed for creators, professionals, and digital lifestyles.</p>
        <div class="mt-6">
            <a href="/nextbyte-e-commerce/index.html#featured-products" class="px-6 py-3 transition-all duration-300 border hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer">Shop Now</a>
            <a href="/nextbyte-e-commerce/index.html#featured-products" class="px-6 py-3 transition-all duration-300 border hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer">Explore Deals</a>
        </div>
    </section>
    <section id="hero-right-section">
        <img src="${l}" alt="Hero Image" class="w-full max-w-2xl rounded-2xl shadow-2xl object-cover border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition duration-300 ">
    </section>
    `,d=e=>`
    <div id="${e.id}" data-name="${e.title}" class="categories-cards group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-2xl">
        <img src="${e.image}" alt="${e.title}" class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110  ">
        <div class="absolute bottom-2 left-0 right-0 border border-white/10 bg-black/50 p-2">
        <h3 class="text-white text-center text-lg font-semibold tracking-wide"> ${e.title} </h3>
        </div>
    </div> 
    `,ee=()=>`
        <p class="uppercase tracking-[0.3em] text-sm text-red-400 text-center">POPULAR CATEGORIES</p>
        <h2 class="text-4xl lg:text-5xl font-bold text-center mt-3">Explore Premium Tech Collections</h2>
        <p class="text-gray-400 text-center max-w-2xl mx-auto mt-4">Curated technology designed for productivity, creativity, entertainment, and modern digital experiences.</p>

        <div id="categories-container" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8"></div>
        `,f=[{id:1,title:`Laptops`,image:`/nextbyte-e-commerce/assets/Laptop-DXnZ7-wH.jpeg`},{id:2,title:`Smartphones`,image:`/nextbyte-e-commerce/assets/smartphone-5gK3VJ5g.jpeg`},{id:3,title:`Tablets`,image:`/nextbyte-e-commerce/assets/tablet-2qbRV5e2.jpeg`},{id:4,title:`Accessories`,image:`/nextbyte-e-commerce/assets/accesories-CBKj7Rmp.jpeg`},{id:5,title:`Creator Gear`,image:`/nextbyte-e-commerce/assets/creatorGears-PEd_ht5n.jpeg`},{id:6,title:`Portable Tech`,image:`/nextbyte-e-commerce/assets/portableTech-Ddpq7679.jpeg`}],p=()=>f.map(e=>d(e)).join(``),m=()=>`
    
    <section class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 p-8 md:p-12">
      <section id="why-choose-us-left-section" class="flex flex-wrap gap-3">
        <p class="uppercase leading-tight text-red-400">WHY CHOOSE NEXBYTE</p>
        <h3 class="font-bold text-4xl md:text-5xl lg:text-6xl ">Premium Technology Built For Modern Digital Lifestyles</h3>
        <p class="text-gray-400 max-w-xl">At NEXBYTE, we curate premium technology products designed for creators, professionals, and modern digital experiences. From high-performance devices to essential accessories, every product is selected for quality and reliability.</p>
        <div class="flex flex-wrap gap-3 text-gray-400">
          <p class=" p-1">10K+ Products Sold</p>
          <p class=" p-1">24/7 Support</p>
          <p class=" p-1">Fast Worldwide Shipping</p>
        </div>
        <div class="w-full">
          <a href="/nextbyte-e-commerce/index.html#featured-products" class="border p-2 mt-2 active:scale-95 cursor-pointer hover:bg-red-500 transition-all duration-300">Explore Products</a>
        </div>
      </section>

      <section id="why-choose-us-right-section" class="grid grid-cols-1 sm:grid-cols-2 gap-5 auto-rows-fr mt-10 md:mt-0 "></section>
    </section>`,h=e=>`
    <div class="flex flex-col items-center justify-center border rounded-2xl p-8 gap-3 text-center bg-white/5 border-white/10 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]  transition-all duration-300">
    <i class="${e.icon} text-2xl md:text-3xl lg:text-4xl"></i>
    <h4 class="text-xl md:text-2xl lg:text-3xl">${e.title}</h4>
    <p>${e.description}</p>
</div>`,g=[{id:1,title:`Fast Delivery`,description:`Quick and secure shipping for all premium technology products.`,icon:`ri-truck-line`},{id:2,title:`Secure Payments`,description:`Protected checkout experience with secure transactions.`,icon:`ri-secure-payment-line`},{id:3,title:`Quality Guarantee`,description:`Premium products selected for modern performance and reliability.`,icon:`ri-shield-check-line`},{id:4,title:`24/7 Support`,description:`Dedicated assistance for your tech and product needs.`,icon:`ri-customer-service-2-line`}],te=()=>g.map(e=>h(e)).join(``),ne=`/nextbyte-e-commerce/assets/promo-banner-CA8aW8NK.jpeg`,re=()=>`
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-3xl overflow p-8 md:p-14">
        <section id="promo-banner-left-section" class="flex flex-col gap-3 justify-center md:justify-start">
          <p class="uppercase leading-tight text-red-400">LIMITED TIME COLLECTION</p>
          <h3 class="text-2xl md:text-4xl lg:text-6xl leading-tight font-bold">Upgrade Your Digital Lifestyle</h3>
          <p class="text-gray-400">Explore carefully curated technology products built for productivity, entertainment, and modern digital experiences.</p>
          <div class="flex gap-2 justify-center md:justify-start">
            <a href="/nextbyte-e-commerce/index.html#categories" class="border p-2 active:scale-95 cursor-pointer hover:bg-red-500 transition-all duration-300">Explore Collection</a>
            <a href="/nextbyte-e-commerce/index.html#featured-products" class="border p-2 active:scale-95 cursor-pointer hover:bg-red-500 transition-all duration-300">View Deals</a>
          </div>
        </section>
        <section id="promo-banner-right-section" class="flex items-center justify-center">
          <img src="${ne}" alt="Promo Banner Image" class="w-full h-full min-h-100 object-cover rounded-2xl">
        </section>
    </section>`,_=()=>`

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
    </div>`,v=e=>`
        <div data-id="${e.id}" class="search-result-cards flex items-center gap-5 px-5 py-3 hover:bg-red-600 rounded-xl hover:scale-105 transition-all duration-200">
            <img src="${e.images[0]}" alt="${e.title}" class="w-20 h-20">
            <p>${e.title}</p>
        </div>
    `,y=()=>c.searchResult.map(e=>v(e)).join(``),b=e(),x=()=>{b.headerContainer.innerHTML=s(),b.heroSection.innerHTML=u(),b.categories.innerHTML=ee(),b.whyChooseUs.innerHTML=m(),b.promoBanner.innerHTML=re(),b.newsletterSection.innerHTML=_(),b.footerSection.innerHTML=o();let t=e();t.categoriesContainer.innerHTML=p(),t.whyChooseUsRightSection.innerHTML=te()},S=()=>{e().searchResult.forEach(e=>{if(c.isSearchMenuOpen&&c.searchQuery.length>0){if(e.classList.add(`opacity-100`,`pointer-events-auto`),e.classList.remove(`opacity-0`,`pointer-events-none`),c.searchResult.length===0){e.innerHTML=`<p>No results found</p>`;return}if(c.searchResult.length>0){e.innerHTML=y();return}}else e.classList.add(`opacity-0`,`pointer-events-none`),e.classList.remove(`opacity-100`,`pointer-events-auto`),e.innerHTML=``})},C=()=>{let t=e();c.isMenuOpen?(t.navbarMenu.classList.add(`max-h-96`,`opacity-100`),t.navbarMenu.classList.remove(`max-h-0`,`opacity-0`)):(t.navbarMenu.classList.add(`max-h-0`,`opacity-0`),t.navbarMenu.classList.remove(`max-h-96`,`opacity-100`))},w=()=>{let n=e();n.cartCount&&(n.cartCount.innerHTML=t.cartItems.length)},T=()=>{let n=e();if(n.headerContainer.innerHTML=s(),t.cartItems.length===0)n.cartPage.innerHTML=a();else{n.cartPage.innerHTML=i();let t=e();t.cartProducts.innerHTML=r()}n.footerSection.innerHTML=o()},E=()=>{w(),T();let n=e();t.cartItems.length!==0&&(n.cartTotalPrice.textContent=t.totalPrice.toLocaleString(`en-IN`),n.cartFinalTotal.textContent=(t.totalPrice+5e3).toLocaleString(`en-IN`))},D=()=>{t.totalPrice=t.cartItems.reduce((e,t)=>e=t.price*t.qty+e,0)},O={get:(e,t=null)=>{try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return console.error(`Error Getting Data From Local Storage`,e),t}},set:(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Error Setting Data to Local Storage`,e)}}},k,A=(e,t,n=1500)=>{let r=document.getElementById(`hover-notification`),i=document.getElementById(`notification-message`),a=document.getElementById(`notification-progress`),o=document.getElementById(`sub-message`);clearTimeout(k),i.textContent=e,o.textContent=t,r.classList.remove(`translate-x-[120%]`,`opacity-0`),r.classList.add(`translate-x-0`,`opacity-100`),a.style.width=`100%`,a.style.transition=`none`,requestAnimationFrame(()=>{a.style.transition=`width ${n/1e3}s linear`,a.style.width=`0%`}),k=setTimeout(()=>{j()},n)},j=()=>{let e=document.querySelector(`#hover-notification`);e.classList.remove(`translate-x-0`,`opacity-100`),e.classList.add(`translate-x-[120%]`,`opacity-0`)},M=e=>{t.cartItems=e,O.set(`cartItems`,e),D(),E(),w(),P()},N=()=>{e().proceedToCheckoutBtn.addEventListener(`click`,()=>{A(`This Page is in Development Phase`,`You Can Check Other options`)})},P=()=>{N();let n=e();t.cartItems.length!==0&&n.cartProducts.addEventListener(`click`,e=>{let n=e.target,r=n.closest(`.cart-btn-remove`),i=n.closest(`.cart-btn-increment`),a=n.closest(`.cart-btn-decrement`);if(r){if(!n)return;let e=Number(r.dataset.id),i=t.cartItems.filter(t=>t.id!==e),a=t.cartItems.filter(t=>t.id===e);M(i),A(`Product Removed From Cart`,`${a[0].title}`)}if(i){if(!n)return;let e=Number(i.dataset.id);t.cartItems.find(t=>t.id===e),M(t.cartItems.map(t=>{if(t.id===e){let e=t.qty+1;return{...t,qty:e}}return t}))}if(a){if(!n)return;let e=Number(a.dataset.id);t.cartItems.find(t=>t.id===e),M(t.cartItems.map(t=>{if(t.id===e){let e=t.qty-1;if(t.qty>1)return{...t,qty:e}}return t}))}})},F={products:[],isLoading:!1,filterdProducts:[],selectedCategory:`All`},I=e=>{let t=Math.round(e.rating),n=Array.from({length:t}).map(()=>`<i class="ri-star-fill"></i>`).join(``);return`
    <div class="product-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-2xl" data-id="${e.id}">

        <!-- Product Badge -->
        <span class="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">${e.badge}</span>

        <!-- Product Image -->
        <div class="overflow-hidden aspect-square bg-black/20">
        <img src="${e.images[0]}"  alt="${e.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        </div>

        <!-- Product Content -->
        <div class="p-5">

            <!-- Category -->
            <p class="uppercase tracking-wide text-xs text-red-400">${e.category}</p>

            <!-- Product Title -->
            <h3 class="text-white text-lg font-semibold mt-2 line-clamp-2">${e.title}</h3>

            <!-- Rating -->
            <div class="flex items-center gap-1 mt-3 text-yellow-400 text-sm">

                    ${n}

                <span class="text-gray-300 ml-2">${e.rating.toFixed(1)}</span>

            </div>

            <!-- Price -->
            <div class="flex items-center gap-3 mt-4">

                <p class="text-white text-2xl font-bold">₹${e.price.toLocaleString(`en-IN`)}</p>
                <span class="text-gray-500 line-through">₹${e.price.toLocaleString(`en-IN`)}</span>

            </div>

            <!-- Button -->
            <button class="add-to-cart-btn w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-all duration-300 active:scale-95 cursor-pointer" data-id="${e.id}">
                Add To Cart
            </button>

        </div>

    </div>`},L=()=>F.filterdProducts.map(e=>I(e)).join(``),R=()=>F.products.map(e=>I(e)).join(``),z=()=>{let e=e=>F.products.filter(t=>t.category===e).length;return`
    <div class="text-center">
    <h3 class="uppercase tracking-[0.3em] text-sm text-red-400">FEATURED PRODUCTS</h3>  
    <p class="text-4xl lg:text-5xl font-bold mt-3">Top Picks For Modern Setups</p>
    <p class="text-gray-400 max-w-2xl mx-auto mt-4"Browse premium technology selected for creators, professionals, students, and everyday digital lifestyles.</p>
  </div>
  <!-- Filter -->
  <div class="flex justify-center mt-8">
    <form>
      <select id="products-filter" class="bg-[#1A1F2E] text-white px-4 py-2 rounded-xl border border-white/10 outline-none">
        <option value="All">All <span>${F.products.length}</span></option>
        <option value="Laptops">Laptops <span>${e(`laptops`)}</span></option>
        <option value="Smartphones">Smartphones <span>${e(`smartphones`)}</span></option>
        <option value="Tablets">Tablets <span>${e(`tablets`)}</span></option>
        <option value="Accessories">Accessories <span>${e(`mobile-accessories`)}</span></option>
      </select>
    </form>
  </div>
  <div id="products-card-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

  </div>`},B=()=>`
        <div class="grid grid-cols-4 gap-6">
            ${Array(8).fill(`
                <div class="animate-pulse">
                    <div class="h-56 bg-slate-700 rounded-xl"></div>
                    <div class="h-4 bg-slate-700 mt-4 rounded"></div>
                    <div class="h-4 bg-slate-700 mt-2 w-1/2 rounded"></div>
                </div>
            `).join(``)}
        </div>
    `,V=()=>{let t=e();if(F.isLoading){t.featuredProducts.innerHTML=B();return}if(F.products.length===0){t.featuredProducts.innerHTML=`<p>No Products Found</p>`;return}let n=e();F.filterdProducts.length===0?n.productsCardGrid.innerHTML=R():n.productsCardGrid.innerHTML=L()},H=()=>{let t=e();F.selectedCategory===`Creator Gear`||F.selectedCategory===`Portable Tech`?t.productsFilter.value=`Accessories`:t.productsFilter.value=F.selectedCategory,t.productsFilter.dispatchEvent(new Event(`change`))},U=()=>{let t=e();if(F.isLoading){t.featuredProducts.innerHTML=B();return}if(F.products.length===0){t.featuredProducts.innerHTML=`<p>No Products Found</p>`;return}t.featuredProducts.innerHTML=z();let n=e();n.productsCardGrid.innerHTML=R()},ie=()=>{e().categories.addEventListener(`click`,e=>{let t=e.target.closest(`.categories-cards`);t&&(F.selectedCategory=t.dataset.name,H(),window.location.href=`#featured-products`)})},W=()=>{e(),document.addEventListener(`click`,e=>{let t=e.target.closest(`.footer-links`);t&&(e.preventDefault(),F.selectedCategory=t.dataset.category,H(),window.location.href=`/nextbyte-e-commerce/index.html#featured-products`);let n=e.target.closest(`.social-links`);if(n){e.preventDefault();let t=n.dataset.name;A(`${t} Clicked!`,` Implementation coming soon.`,3e3)}})},G={itemDetails:void 0,itemMainImage:void 0},K=()=>G.itemDetails.images.map((e,t)=>`
        <div class="w-20 h-20 border rounded-xl">
            <img src="${e}" alt="Product Image ${t+1}" loading="lazy" class="small-product-image">
        </div>
        `).join(``),q=()=>{let e=G.itemDetails,t=e.images[0],n=Math.round(e.rating),r=Array.from({length:n}).map(()=>`<i class="ri-star-s-fill text-yellow-300"></i>`).join(``);return`
        <div class="flex flex-col md:flex-row md:sticky md:top-24">
        <div id="image-gallary" class="flex justify-center md:justify-start md:flex-col gap-3 h-full">
            ${K()}
        </div>
        <img id="main-product-image" src="${G.itemMainImage===void 0?t:G.itemMainImage}" alt="Product Images 1" class="w-full mx-h-[600px] object-contain self-start">
    </div>
    <div class="h-full flex flex-col px-6 py-3 gap-3"> 

        <div class="flex flex-col gap-3">
            <h1 class="text-lg md:text-2xl lg:text-6xl">${e.title}</h1>

            <div id="rating">
                ${r}
                <span>${n}</span>
            </div>

            <div class="flex justify-between items-center">
                <p class=" bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">${e.badge}</p>
                <p class=" ${e.availabilityStatus===`Low Stock`?`text-red-500`:`text-green-500`}">
                    ${e.availabilityStatus}
                </p>
            </div>
        </div>

        <div class="h-px bg-gray-600"></div>

        <div class="flex flex-col gap-3 p-2">

            <div id="price-section" class="flex gap-2 justify-between">
                <div>
                    <div class="flex gap-4">
                        <p class="text-red-500 text-lg md:text-xl lg:text-2xl">-${e.discountPercentage}%</p>
                        <p id="discounted-price">₹<span class="text-lg md:text-2xl lg:text-3xl">${e.price.toLocaleString(`en-IN`)}</span></p>
                    </div>
                    <p id="actual-price" class="line-through text-gray-600">M.R.P. :₹<span>${e.actualPrice.toLocaleString(`en-IN`)}</span></p>
                </div>

                <div>
                    <p class="text-gray-600">${e.shippingInformation}</p>
                </div>

            </div>

            <div class="flex flex-col justify-between gap-3">
                <span>Inclusive of all taxes</span>
                <button id="add-to-cart" data-id="${e.id}" class="py-1 rounded-xl bg-red-600 hover:bg-red-700 font-bold cursor-pointer transition-all duration-300 active:scale-95 ">Add To Cart</button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 px-3 gap-2">
                <div class="border border-gray-700 text-center flex flex-col justify-center items-center px-2 py-1">
                    <i class="ri-truck-line"></i>
                    <p class="text-sm">Free delivery</p>
                </div>
                <div class="border border-gray-700 text-center flex flex-col justify-center items-center px-2 py-1">
                    <i class="ri-money-rupee-circle-line"></i>
                    <p class="text-sm">Cash on Delivery Available</p>
                </div>
                <div class="border border-gray-700 text-center flex flex-col justify-center items-center px-2 py-1">
                    <i class="ri-refund-line"></i>
                    <p class="text-sm">7-Day Return Policy</p>
                </div>
            </div>
        </div>

        <div class="h-px bg-gray-600"></div>

        <div class="flex flex-col gap-5">
            <div id="description-container" class="flex flex-col gap-3">
                <p class="text-lg md:text-2xl lg:text-3xl">Description</p>
                <p class="text-start text-sm">
                    ${e.description}
                </p>
            </div>

            <div id="review-container" class="flex flex-col gap-3 ">

                <p class="text-lg md:text-2xl lg:text-3xl">Reviews</p>

                <div id="review-cards" class="flex flex-col gap-5"></div>
                
            </div>
            
        </div>
    </div>`},J=e=>{let t=e.rating,n=Array.from({length:t}).map(()=>`<i class="ri-star-s-fill text-yellow-300"></i>`).join(``),r=Math.round(Math.random()*400),i=new Date(e.date).toLocaleDateString();return`

        <div class=" border border-gray-700 hover:border-gray-500 transition-all duration-300 rounded-xl p-4 flex flex-col gap-3">

            <div class="flex justify-between items-center">

            <div class="flex items-center gap-3">

                <img src="https://i.pravatar.cc/${r}" loading="lazy" class="w-10 h-10 rounded-full">

                <div>
                    
                    <p class="font-medium">${e.reviewerName}</p>

                    <div class="text-yellow-400 text-sm">

                        ${n}
                        <span class="text-white">${e.rating}</span>
                    </div>

                </div>
            </div>

            <p class="text-sm text-gray-500 ">
                ${i}
            </p>

        </div>
            <p class="text-gray-300 leading-relaxed">${e.comment}</p>

        </div>`},Y=()=>(G.itemDetails=O.get(`productDetails`),G.itemDetails.reviews.map(e=>J(e)).join(``)),ae=()=>{let t=e();t.headerContainer.innerHTML=s(),t.productsDetails.innerHTML=q(),t.footerSection.innerHTML=o();let n=e();n.reviewsCardContainer.innerHTML=Y()},X=()=>{let t=e();document.addEventListener(`click`,e=>{if(e.target.closest(`.closing-nav-outside`)){c.isMenuOpen=!1,C();return}t.headerContainer.contains(e.target)||(c.isMenuOpen=!1,C()),e.target.closest(`.search-input`)||(c.isSearchMenuOpen=!1,S())}),t.menuButton.addEventListener(`click`,()=>{c.isMenuOpen=!c.isMenuOpen,C()}),t.searchInput.forEach(e=>{e.addEventListener(`focus`,()=>{c.isSearchMenuOpen=!0,F.products=O.get(`products`),S()}),e.addEventListener(`input`,e=>{let t=e.target.value.trim().toLowerCase();if(c.searchQuery=t,t===``){c.searchResult=[],S();return}c.searchResult=F.products.filter(e=>{let n=e.title.toLowerCase().includes(t),r=e.category.toLowerCase().includes(t);return n||r}),S()})}),t.searchResult.forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.closest(`.search-result-cards`),n=Number(t.dataset.id),r=c.searchResult.find(e=>e.id===n);if(r){let e={...r};G.itemDetails=e,O.set(`productDetails`,e),window.location.href=`/src/pages/productDetailsPage.html`}})})},oe=()=>{let t=e();t.newsletterForm.addEventListener(`submit`,e=>{e.preventDefault(),A(`Subscribed!`,`Thank you! ${t.newsLetterInput.value.trim()} has been successfully registered.`,2e3),t.newsletterForm.reset()})},se=()=>{let n=e();n.addToCart.onclick=()=>{let e=G.itemDetails,n={...e,qty:1};t.cartItems.find(t=>t.id===e.id)?(t.cartItems=t.cartItems.map(t=>t.id===e.id?{...t,qty:t.qty+1}:t),A(`Product Again Added To Cart`,`${n.title}`)):(t.cartItems=[...t.cartItems,n],A(`Added To Cart`,`${n.title}`)),O.set(`cartItems`,t.cartItems),w()},n.imageGallary.onpointerover=e=>{let t=e.target;if(!t.matches(`.small-product-image`))return;let r=t.src;G.itemMainImage=r,n.mainImage.src=r}},Z=[`HOT`,`NEW`,`TRENDING`,`BEST SELLER`,`LIMITED`],ce=e=>Z[e%Z.length],Q=async()=>{try{F.isLoading=!0,U();let e=await Promise.all([`https://dummyjson.com/products/category/laptops`,`https://dummyjson.com/products/category/smartphones`,`https://dummyjson.com/products/category/tablets`,`https://dummyjson.com/products/category/mobile-accessories`].map(e=>fetch(e))),t=(await Promise.all(e.map(e=>{if(!e.ok)throw Error(`Failed to fetch products`);return e.json()}))).flatMap(e=>e.products).map(e=>{let t=Math.round(e.price*85),n=Math.round(t+t*e.discountPercentage/100);return{id:e.id,title:e.title,description:e.description,category:e.category,price:t,actualPrice:n,badge:ce(e.id),rating:e.rating,stock:e.stock,shippingInformation:e.shippingInformation,availabilityStatus:e.availabilityStatus,reviews:e.reviews,images:e.images,thumbnail:e.thumbnail,discountPercentage:e.discountPercentage}});F.products=t,O.set(`products`,t)}catch(e){throw console.error(`Error fetching products:`,e),Error(`Error fetching products:`,e)}finally{F.isLoading=!1}},$=e=>{t.cartItems=e,O.set(`cartItems`,e),w()},le=()=>{let n=e();n.featuredProducts.addEventListener(`click`,async e=>{let n=e.target.closest(`.add-to-cart-btn`);if(n){let e=Number(n.dataset.id),r=F.products.find(t=>t.id===e);if(t.cartItems.some(t=>t.id===e))$(t.cartItems.map(t=>{if(e===t.id){let e=t.qty+1;return{...t,qty:e}}return t})),A(`Product Added Again To cart`,`${r.title}`);else{let e={id:r.id,category:r.category,title:r.title,description:r.description,price:r.price,images:r.images,qty:1};$([...t.cartItems,e]),A(`Added To cart`,`${r.title}`)}}}),n.productsCardGrid.addEventListener(`click`,e=>{let t=e.target.closest(`.product-card`);if(t&&!e.target.closest(`.add-to-cart-btn`)){let e=Number(t.dataset.id);G.itemDetails=F.products.find(t=>t.id===e),O.set(`productDetails`,G.itemDetails),window.location.href=`/nextbyte-e-commerce/src/pages/productDetailsPage.html`}});let r=n.productsFilter,i=e=>F.products.filter(t=>t.category===e),a={Laptops:`laptops`,Smartphones:`smartphones`,Tablets:`tablets`,Accessories:`mobile-accessories`};r.addEventListener(`change`,()=>{let e=r.value;e===`All`?F.filterdProducts=F.products:F.filterdProducts=i(a[e]),F.selectedCategory=e,V()})},ue=()=>{G.itemDetails=O.get(`productDetails`)},de=()=>{t.cartItems=O.get(`cartItems`,[])},fe=()=>document.getElementById(`home-page`)!==null,pe=()=>document.getElementById(`product-details-page`)!==null,me=()=>document.getElementById(`cart-main-page`)!==null;(async()=>{de(),D(),w(),fe()&&(x(),C(),w(),X(),await Q(),U(),le(),ie(),oe(),W()),me()&&(E(),w(),X(),P(),W()),pe()&&(ue(),ae(),w(),X(),se(),W())})();