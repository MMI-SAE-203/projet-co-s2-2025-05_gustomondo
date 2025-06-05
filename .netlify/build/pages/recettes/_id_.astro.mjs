import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cp7Txubb.mjs';
import { d as getRecetteById } from '../../chunks/backend_i0PyPw_S.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const recette = await getRecetteById(id);
  if (!recette) {
    return Astro2.redirect("/recettes");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": recette.Nom_recette }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Titre avec soulignement --> <h1 class="text-3xl font-semibold italic mb-2">${recette.Nom_recette}</h1> <div class="h-0.5 w-24 bg-gray-700 mb-8"></div> <!-- Ligne d’informations : Temps, Origine, Difficulté, Type de nourriture --> <div class="flex flex-wrap items-center text-gray-600 mb-8 space-x-4"> ${recette.Temps_de_preparation_recette && renderTemplate`<div class="flex items-center"> <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${recette.Temps_de_preparation_recette}</span> </div>`} ${recette.Origine_recette && renderTemplate`<div class="flex items-center"> <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.846 0 5.487.906 7.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v.01"></path> </svg> <span>${recette.Origine_recette}</span> </div>`} ${recette.Difficulte_recette && renderTemplate`<div class="flex items-center"> <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.042 12.042 0 010 6.845L12 18m0-4v4m0-4l-6.16 3.422a12.042 12.042 0 000-6.845L12 14z"></path> </svg> <span>${recette.Difficulte_recette}</span> </div>`} ${recette.Type_nourriture_recette && renderTemplate`<div class="flex items-center"> <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <span>${recette.Type_nourriture_recette}</span> </div>`} </div> <!-- Contenu en deux colonnes : image à gauche, ingrédients à droite --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"> <!-- IMAGE RECETTE --> ${recette.imgUrl ? renderTemplate`<img${addAttribute(recette.imgUrl, "src")}${addAttribute(recette.Nom_recette, "alt")} class="w-full h-auto rounded-lg shadow-md object-cover" loading="lazy">` : renderTemplate`<div class="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg"> <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11l3 3 5-5"></path> </svg> </div>`} <!-- INGREDIENTS PRINCIPAUX --> <div> <h2 class="text-xl font-semibold mb-4">INGRÉDIENTS</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"> ${recette.Ingredients_principaux_recette.split(";").map((ingredient) => ingredient.trim()).filter(Boolean).map((ing) => renderTemplate`<li>${ing}</li>`)} </ul> </div> </div> <!-- NOTES / INSTRUCTIONS --> ${recette.Notes_recette && renderTemplate`<div> <h2 class="text-xl font-semibold mb-4">NOTES</h2> <div class="prose prose-lg text-gray-700"> ${ void 0} <p>${unescapeHTML(recette.Notes_recette)}</p> </div> </div>`} </section> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/recettes/[id].astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/recettes/[id].astro";
const $$url = "/recettes/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
