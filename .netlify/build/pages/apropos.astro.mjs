import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cp7Txubb.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Apropos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 Propos de GustoMundo", "description": "D\xE9couvrez l'histoire et la mission de GustoMundo, votre plateforme d\xE9di\xE9e aux produits exotiques.", "class": "bg-[#f9f5ea]" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-24 py-8"> <!-- SECTION Présentation --> <section class="bg-[#f28c8c] text-white py-16" id="presentation"> <div class="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8"> <div class="md:w-1/2 text-center md:text-left space-y-4"> <h1 class="text-4xl font-semibold mb-2">Présentation</h1> <p class="text-lg leading-relaxed">
Chez GustoMundo, on ne se contente pas de vous faire découvrir des produits exotiques,
          on vous embarque pour un véritable voyage sensoriel, entre traditions, histoires et
          saveurs venues des quatre coins du monde.
</p> <!-- SVG Animation: Rotating globe --> <div class="flex justify-center md:justify-start mt-4"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <circle cx="12" cy="12" r="10" stroke-width="2"></circle> <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" stroke-width="2"></path> </svg> </div> </div> <div class="md:w-1/2"> <img src="APP1.webp" alt="Bol de cuisine exotique" class="w-full h-64 md:h-auto object-cover rounded-[50%_20%_30%_60%]"> </div> </div> </section> <!-- SECTION Qui sommes-nous ? --> <section class="bg-[#f9f5ea] py-16" id="quisommesnous"> <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"> <!-- Texte --> <div class="md:w-1/2 z-10"> <h2 class="text-3xl font-semibold text-[#1f6659] mb-4">Qui sommes-nous ?</h2> <p class="text-gray-800 leading-relaxed mb-4">
Bienvenue sur GustoMundo, une plateforme dédiée à la découverte et à l’achat de produits
          exotiques. Notre mission est simple : vous offrir une expérience immersive et authentique,
          en vous permettant de découvrir des produits uniques tout en explorant leur histoire, leurs
          origines et leur culture à travers des recettes, anecdotes et contenus enrichissants.
</p> </div> <!-- SVG animé à droite --> <div class="md:w-1/2 flex justify-center md:justify-end"> <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1928.06 890.62" class="w-full max-w-md h-auto stroke-[#c1272d]"> <path class="cls-1 path-animate" d="M4.27,292.96s125.28,376.06,132.32,328.17S30.96,43.66,92.93,136.62s250.7,626.76,250.7,470.42S140.82-43.66,253.49,114.08s378.87,839.44,333.8,601.41S326.73-167.61,438,47.88s312.68,963.25,288.73,717.54S516.87-35.21,597.16,94.36s235.21,819.72,240.85,639.44S619.69-77.47,738,94.36s261.97,853.52,264.79,669.01S816.87-9.86,901.38,132.39s216.9,842.25,215.49,629.58-135.21-709.86-54.93-561.97,330.99,826.76,269.01,538.03-228.17-690.14-105.63-528.17,430.99,907.68,343.66,604.54S1305.61,19.72,1402.79,156.34s253.52,771.83,239.44,571.83S1416.87,15.49,1515.47,187.32s233.8,661.97,205.63,456.34-129.58-618.31-22.54-370.42,163.38,323.94,114.08,126.76c-49.3-197.18,5.63-108.23,57.75,7.86s47.89,52.7,32.39-16.31-.5-35.21,10.31-9.86l10.81,25.35"></path> </svg> </div> </div>  </section> <!-- SECTION Notre histoire --> <section class="bg-white py-16" id="notrehistoire"> <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"> <div class="md:w-1/2"> <img src="APP2.webp" alt="Fruits exotiques" class="w-full h-64 md:h-auto object-cover rounded-[30%_60%_40%_60%]"> </div> <div class="md:w-1/2 text-center md:text-left space-y-4"> <h2 class="text-3xl font-semibold text-[#1f6659] mb-2">Notre Histoire</h2> <p class="text-gray-800 leading-relaxed">
Tout a commencé avec une idée : faciliter l’accès aux produits exotiques authentiques
          et de qualité. Passionnés par la découverte des saveurs et des cultures du monde, nous
          avons décidé de créer GustoMundo pour partager cette passion avec vous.
</p> </div> </div> </section> <!-- SECTION Notre engagement --> <section class="bg-[#f9f5ea] py-16" id="engagement"> <div class="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8"> <div class="md:w-1/2 text-center md:text-left space-y-4"> <h2 class="text-3xl font-semibold text-[#1f6659] mb-2">Notre engagement</h2> <ul class="list-disc list-inside text-gray-800 space-y-2 leading-relaxed"> <li><strong>Qualité &amp; Innovation :</strong> Nous sélectionnons les meilleurs produits/services pour vous offrir une expérience unique.</li> <li><strong>Communauté &amp; Partage :</strong> Nous croyons en la force d’une communauté engagée et bienveillante.</li> <li><strong>Transparence &amp; Accessibilité :</strong> Nous mettons un point d’honneur à vous proposer des contenus et services clairs, adaptés à vos besoins.</li> <li><strong>Écologie &amp; Durabilité :</strong> Emballages écoresponsables et choix éthiques.</li> </ul> </div> <div class="md:w-1/2"> <img src="APP3.webp" alt="Engagement GustoMundo" class="w-full h-64 md:h-auto object-cover rounded-[40%_30%_50%_60%]"> </div> </div> </section> <!-- SECTION Notre vision --> <section class="bg-white py-16 text-center" id="vision"> <div class="container mx-auto px-4 space-y-4"> <h2 class="text-3xl font-semibold text-[#1f6659]">Notre vision</h2> <p class="max-w-3xl mx-auto text-gray-800 leading-relaxed">
Nous ne nous arrêtons pas là ! Avec votre soutien, nous souhaitons continuer
        à développer GustoMundo en proposant toujours plus de produits, services,
        contenus innovants et pertinents.
</p> </div> </section> </main> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/Apropos.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/Apropos.astro";
const $$url = "/Apropos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Apropos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
