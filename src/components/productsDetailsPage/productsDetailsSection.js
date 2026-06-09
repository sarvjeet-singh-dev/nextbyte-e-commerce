import { detailsPageState } from "../../state/detailsPageState";
import { storage } from "../../utils/storage";
import { productImages } from "./prodImageGallaryCard";

export const prodDetailsSection = () => {

    const product = detailsPageState.itemDetails;

    const productImage = product.images[0];
    
    const rating = Math.round(product.rating);
    const ratingStar = Array.from({length:rating}).map(()=> `<i class="ri-star-s-fill text-yellow-300"></i>`).join("");

    return `
        <div class="flex flex-col md:flex-row md:sticky md:top-24">
        <div id="image-gallary" class="flex justify-center md:justify-start md:flex-col gap-3 h-full">
            ${productImages()}
        </div>
        <img id="main-product-image" src="${detailsPageState.itemMainImage === undefined ? productImage : detailsPageState.itemMainImage}" alt="Product Images 1" class="w-full mx-h-[600px] object-contain self-start">
    </div>
    <div class="h-full flex flex-col px-6 py-3 gap-3"> 

        <div class="flex flex-col gap-3">
            <h1 class="text-lg md:text-2xl lg:text-6xl">${product.title}</h1>

            <div id="rating">
                ${ratingStar}
                <span>${rating}</span>
            </div>

            <div class="flex justify-between items-center">
                <p class=" bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">${product.badge}</p>
                <p class=" ${product.availabilityStatus === "Low Stock" ? "text-red-500" : "text-green-500"}">
                    ${product.availabilityStatus}
                </p>
            </div>
        </div>

        <div class="h-px bg-gray-600"></div>

        <div class="flex flex-col gap-3 p-2">

            <div id="price-section" class="flex gap-2 justify-between">
                <div>
                    <div class="flex gap-4">
                        <p class="text-red-500 text-lg md:text-xl lg:text-2xl">-${product.discountPercentage}%</p>
                        <p id="discounted-price">₹<span class="text-lg md:text-2xl lg:text-3xl">${(product.price).toLocaleString("en-IN")}</span></p>
                    </div>
                    <p id="actual-price" class="line-through text-gray-600">M.R.P. :₹<span>${(product.actualPrice).toLocaleString("en-IN")}</span></p>
                </div>

                <div>
                    <p class="text-gray-600">${product.shippingInformation}</p>
                </div>

            </div>

            <div class="flex flex-col justify-between gap-3">
                <span>Inclusive of all taxes</span>
                <button id="add-to-cart" data-id="${product.id}" class="py-1 rounded-xl bg-red-600 hover:bg-red-700 font-bold cursor-pointer transition-all duration-300 active:scale-95 ">Add To Cart</button>
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
                    ${product.description}
                </p>
            </div>

            <div id="review-container" class="flex flex-col gap-3 ">

                <p class="text-lg md:text-2xl lg:text-3xl">Reviews</p>

                <div id="review-cards" class="flex flex-col gap-5"></div>
                
            </div>
            
        </div>
    </div>`
};