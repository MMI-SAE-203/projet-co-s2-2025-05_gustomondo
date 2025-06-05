import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cp7Txubb.mjs';
import { p as produitById } from '../../chunks/backend_i0PyPw_S.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  console.log("\u2192 Dynamic page catalogue, id re\xE7u :", id);
  let produit = null;
  try {
    produit = await produitById(id);
  } catch (err) {
    console.error("Erreur r\xE9cup\xE9ration produitById(", id, "):", err);
  }
  if (!produit) {
    return Astro2.redirect("/catalogue");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": produit.nom }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <h1 class="text-3xl font-bold text-center mb-8">${produit.nom}</h1> <div class="flex justify-center"> <div class="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-lg 
                  overflow-hidden transition transform hover:scale-105 hover:shadow-xl"> ${produit.imgUrl ? renderTemplate`<img class="w-full h-64 object-cover"${addAttribute(produit.imgUrl, "src")}${addAttribute(produit.nom, "alt")} loading="lazy">` : renderTemplate`<div class="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400"> <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11l3 3 5-5"></path> </svg> </div>`} <div class="p-4"> <h2 class="text-xl font-bold text-gray-800 mb-2">${produit.nom}</h2> ${produit.prix && renderTemplate`<p class="text-lg font-semibold text-[#D2193E] mb-4"> ${produit.prix} €
</p>`} ${produit.description && renderTemplate`<div class="text-gray-700 mb-4">${unescapeHTML(produit.description)}</div>`} <ul class="text-sm text-gray-600 space-y-1"> ${produit.Produits && renderTemplate`<li> <span class="font-medium">Catégorie :</span> ${produit.Produits} </li>`} ${produit.Pays && renderTemplate`<li> <span class="font-medium">Pays :</span> ${produit.Pays} </li>`} ${produit.stock && renderTemplate`<li> <span class="font-medium">Pays :</span> ${produit.stock} </li>`} ${produit.created && renderTemplate`<li> <span class="font-medium">Date d’ajout :</span>${" "} ${new Date(produit.created).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </li>`} </ul> <div class="mt-6"> <a href="/catalogue" class="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded 
                     hover:bg-gray-300 transition-colors">
← Retour au catalogue
</a> </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/catalogue/[id].astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/catalogue/[id].astro";
const $$url = "/catalogue/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
