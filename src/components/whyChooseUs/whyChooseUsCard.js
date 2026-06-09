export const whyChooseUsCard = (data) => {
    return`
    <div class="flex flex-col items-center justify-center border rounded-2xl p-8 gap-3 text-center bg-white/5 border-white/10 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]  transition-all duration-300">
    <i class="${data.icon} text-2xl md:text-3xl lg:text-4xl"></i>
    <h4 class="text-xl md:text-2xl lg:text-3xl">${data.title}</h4>
    <p>${data.description}</p>
</div>`
};