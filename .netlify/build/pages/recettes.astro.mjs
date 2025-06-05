import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cp7Txubb.mjs';
import { e as getTimes, f as getDifficulties, h as getRecettesByFilters } from '../chunks/backend_i0PyPw_S.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const tempsParam = url.searchParams.get("temps")?.trim() ?? "";
  const difficulteParam = url.searchParams.get("difficulte")?.trim() ?? "";
  const times = await getTimes();
  const difficulties = await getDifficulties();
  const recettes = await getRecettesByFilters(tempsParam, difficulteParam);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Toutes les Recettes" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- FORMULAIRE DE FILTRAGE --> <form method="get" action="/recettes" class="flex flex-col items-center mb-8 space-y-6"> <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 w-full justify-center"> <!-- Filtre Temps de préparation --> <div class="flex flex-col"> <label for="temps" class="mb-2 text-lg font-medium text-gray-700">Temps de préparation :</label> <select name="temps" id="temps" class="p-2 border border-gray-300 rounded w-60 bg-white"> <option value="">Tous</option> ${times.map((t) => renderTemplate`<option${addAttribute(t, "value")}${addAttribute(t === tempsParam, "selected")}>${t}</option>`)} </select> </div> <!-- Filtre Difficulté --> <div class="flex flex-col"> <label for="difficulte" class="mb-2 text-lg font-medium text-gray-700">Difficulté :</label> <select name="difficulte" id="difficulte" class="p-2 border border-gray-300 rounded w-60 bg-white"> <option value="">Toutes</option> ${difficulties.map((d) => renderTemplate`<option${addAttribute(d, "value")}${addAttribute(d === difficulteParam, "selected")}>${d}</option>`)} </select> </div> </div> <button type="submit" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
Filtrer
</button> </form> <!-- GRILLE DES RECETTES --> ${recettes.length === 0 ? renderTemplate`<p class="text-center text-gray-500">Aucune recette ne correspond à ces critères.</p>` : renderTemplate`<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> ${recettes.map((r) => renderTemplate`<a${addAttribute(`/recettes/${r.id}`, "href")} class="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"> ${r.imgUrl ? renderTemplate`<!-- ------------ vignette carré sans plugin ------------ -->
              <div class="relative w-full pb-[100%]"> <!-- carré : padding-bottom 100 % --> <img${addAttribute(r.imgUrl, "src")}${addAttribute(r.Nom_recette, "alt")} loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"> </div>` : renderTemplate`<!-- ------------ placeholder si pas d'image ------------ -->
              <div class="relative w-full pb-[100%] bg-gray-100 flex items-center justify-center text-gray-400"> <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11l3 3 5-5"></path> </svg> </div>`} <div class="p-4"> <h2 class="text-lg font-semibold text-gray-800 group-hover:text-[#D2193E]"> ${r.Nom_recette} </h2> ${r.Temps_de_preparation_recette && renderTemplate`<p class="text-sm text-gray-600 mt-1">
Temps : ${r.Temps_de_preparation_recette} </p>`} ${r.Difficulte_recette && renderTemplate`<p class="text-sm text-gray-600 mt-1">
Difficulté : ${r.Difficulte_recette} </p>`} </div> </a>`)} </div>`} </div> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/recettes/index.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/recettes/index.astro";
const $$url = "/recettes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
