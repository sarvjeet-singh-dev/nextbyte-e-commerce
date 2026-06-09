import { productState } from "../../state/productState";

export const productsSection = () => {
  
  const getCategoryCount = (category) =>{
    return (productState.products.filter((product)=> product.category === category)).length;
  };

  return `
    <div class="text-center">
    <h3 class="uppercase tracking-[0.3em] text-sm text-red-400">FEATURED PRODUCTS</h3>  
    <p class="text-4xl lg:text-5xl font-bold mt-3">Top Picks For Modern Setups</p>
    <p class="text-gray-400 max-w-2xl mx-auto mt-4"Browse premium technology selected for creators, professionals, students, and everyday digital lifestyles.</p>
  </div>
  <!-- Filter -->
  <div class="flex justify-center mt-8">
    <form>
      <select id="products-filter" class="bg-[#1A1F2E] text-white px-4 py-2 rounded-xl border border-white/10 outline-none">
        <option value="All">All <span>${(productState.products).length}</span></option>
        <option value="Laptops">Laptops <span>${getCategoryCount("laptops")}</span></option>
        <option value="Smartphones">Smartphones <span>${getCategoryCount("smartphones")}</span></option>
        <option value="Tablets">Tablets <span>${getCategoryCount("tablets")}</span></option>
        <option value="Accessories">Accessories <span>${getCategoryCount("mobile-accessories")}</span></option>
      </select>
    </form>
  </div>
  <div id="products-card-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

  </div>`;
};
