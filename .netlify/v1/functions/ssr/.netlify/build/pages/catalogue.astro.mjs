import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_l7TnKUXe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DrxQTHDd.mjs';
import { g as getCategories, a as getPays, b as getProduitsByFilters } from '../chunks/backend_CCJ4f33d.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const categorie = Astro2.url.searchParams.get("categorie")?.trim() ?? "";
  const pays = Astro2.url.searchParams.get("pays")?.trim() ?? "";
  console.log("Param\xE8tres re\xE7us \u2192", { categorie, pays });
  const categoriesList = await getCategories();
  console.log(">> Cat\xE9gories r\xE9cup\xE9r\xE9es :", categoriesList);
  const paysList = await getPays();
  console.log(">> Pays r\xE9cup\xE9r\xE9s :", paysList);
  const produits = await getProduitsByFilters(categorie, pays);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catalogue" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-12"> <form method="get" action="/catalogue" class="flex flex-col items-center mb-8"> <label for="categorie" class="mb-2 text-lg font-medium text-gray-700">
Filtrer par catégorie :
</label> <!-- Select des catégories --> <select name="categorie" id="categorie" class="p-2 border border-gray-300 rounded mb-4 w-64"> <option value="">Toutes</option> ${categoriesList.map((cat) => renderTemplate`<option${addAttribute(cat, "value")}${addAttribute(cat === categorie, "selected")}> ${cat} </option>`)} </select> <label for="pays" class="mb-2 text-lg font-medium text-gray-700">
Filtrer par pays :
</label> <!-- Select des pays --> <select name="pays" id="pays" class="p-2 border border-gray-300 rounded mb-4 w-64"> <option value="">Tous</option> ${paysList.map((p) => renderTemplate`<option${addAttribute(p, "value")}${addAttribute(p === pays, "selected")}> ${p} </option>`)} </select> <!-- Bouton Filtrer : en GET, envoie ?categorie=...&pays=... --> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
Filtrer
</button> </form> <!-- GRID PRODUITS --> ${produits.length === 0 ? renderTemplate`<p class="text-center text-gray-500">
Aucun produit ne correspond à votre recherche.
</p>` : renderTemplate`<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> ${produits.map((p) => renderTemplate`<a${addAttribute(`/catalogue/${p.id}`, "href")} class="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"> ${p.imgUrl ? renderTemplate`<img${addAttribute(p.imgUrl, "src")}${addAttribute(p.nom, "alt")} loading="lazy" class="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-200">` : renderTemplate`<div class="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400"> <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11l3 3 5-5"></path> </svg> </div>`} <div class="p-4"> <h2 class="text-lg font-semibold text-gray-800 group-hover:text-[#D2193E]"> ${p.nom} </h2> ${p.prix && renderTemplate`<p class="text-sm text-gray-600 mt-1">${p.prix}&nbsp;€</p>`} </div> </a>`)} </div>`} </section> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/catalogue/index.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/catalogue/index.astro";
const $$url = "/catalogue";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
