export const reviewsCard = (product) =>{

    const rating = product.rating;
    const ratingStars = Array.from({length:rating}).map(() => `<i class="ri-star-s-fill text-yellow-300"></i>`).join("");
    const randomAvtaarImage = Math.round(Math.random() * 400);
    const reviewDate = new Date(product.date).toLocaleDateString();

    return `

        <div class=" border border-gray-700 hover:border-gray-500 transition-all duration-300 rounded-xl p-4 flex flex-col gap-3">

            <div class="flex justify-between items-center">

            <div class="flex items-center gap-3">

                <img src="https://i.pravatar.cc/${randomAvtaarImage}" loading="lazy" class="w-10 h-10 rounded-full">

                <div>
                    
                    <p class="font-medium">${product.reviewerName}</p>

                    <div class="text-yellow-400 text-sm">

                        ${ratingStars}
                        <span class="text-white">${product.rating}</span>
                    </div>

                </div>
            </div>

            <p class="text-sm text-gray-500 ">
                ${reviewDate}
            </p>

        </div>
            <p class="text-gray-300 leading-relaxed">${product.comment}</p>

        </div>`
};