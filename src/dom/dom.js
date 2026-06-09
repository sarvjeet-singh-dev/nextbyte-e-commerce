export const getElement = () => {
    return{

    // Index Page
        // Header Ids
        headerContainer : document.getElementById("nav-container"),
        menuButton : document.getElementById("menu-button"),
        navbarMenu : document.getElementById("navbar-menu"),
        cartCount : document.getElementById("cart-count"),
        searchInput : document.querySelectorAll(".search-input"),
        searchResult : document.querySelectorAll(".search-results"),
        
        // Hero Sections Ids
        heroSection : document.getElementById("hero"),
        
        // Category Section Ids
        categories : document.getElementById("categories"),
        categoriesContainer : document.getElementById("categories-container"),
        
        // Products Section Ids
        featuredProducts : document.getElementById("featured-products"),
        productsCardGrid : document.getElementById("products-card-grid"),
        buttons : document.querySelectorAll(".add-to-cart-btn"),
        productsFilter :document.getElementById("products-filter"),

        // Why Choose Use Section Ids
        whyChooseUs : document.getElementById("why-choose-us"),
        whyChooseUsRightSection : document.getElementById("why-choose-us-right-section"),

        // Promo Banner Ids
        promoBanner : document.getElementById("promo-banner"),

        // Newsletter Section Ids
        newsletterSection : document.getElementById("newsletter"),
        newsletterForm: document.getElementById("newsletter-form"),
        subscribeBtn : document.getElementById("news-letter-subscribe-btn"),
        newsLetterInput : document.getElementById("news-letter-input"),

        // Footer Section Ids
        footerSection : document.getElementById("footer-section"),
        footerShopLinks : document.getElementById("shop-links-footer"),

    // Cart page
        cartPage : document.getElementById("cart-page"),
        cartProducts : document.getElementById("cart-products"),
        cartTotalPrice: document.getElementById("cart-total-price"),
        cartFinalTotal : document.getElementById("cart-final-total"),
        decrementBtn : document.querySelectorAll(".cart-btn-decrement"),
        incrementBtn : document.querySelectorAll(".cart-btn-increment"),
        removeBtn : document.querySelectorAll(".cart-btn-remove"),
        proceedToCheckoutBtn:document.getElementById("proceed-to-checkout"),

    // Products Details Page
        productsDetails: document.getElementById("products-details"),
        reviewsCardContainer:document.getElementById("review-cards"),
        addToCart : document.getElementById("add-to-cart"),
        imageGallary : document.getElementById("image-gallary"),
        mainImage : document.getElementById("main-product-image"),
        imageGallaryContainer: document.getElementById("image-gallary"),
    }; 
};