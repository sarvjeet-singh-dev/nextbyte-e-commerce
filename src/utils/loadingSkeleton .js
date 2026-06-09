export const loadingSkeleton = () => {
    return `
        <div class="grid grid-cols-4 gap-6">
            ${Array(8).fill(`
                <div class="animate-pulse">
                    <div class="h-56 bg-slate-700 rounded-xl"></div>
                    <div class="h-4 bg-slate-700 mt-4 rounded"></div>
                    <div class="h-4 bg-slate-700 mt-2 w-1/2 rounded"></div>
                </div>
            `).join("")}
        </div>
    `;
};