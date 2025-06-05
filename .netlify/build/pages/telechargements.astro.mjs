import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D6lHauDs.mjs';
export { renderers } from '../renderers.mjs';

const $$Telechargements = createComponent(($$result, $$props, $$slots) => {
  const listeDesPDF = [
    // Première série de PDFs
    {
      titre: "A\xE7a\xEF Bowl fa\xE7on Amazonie",
      url: "/recettes-pdf/A\xE7a\xEF-bowl.pdf",
      description: "Mixez l\u2019a\xE7a\xEF avec la banane et le cupua\xE7u, versez dans un bol et ajoutez granola et fruits frais."
    },
    {
      titre: "Aj\xED Molido Salsa",
      url: "/recettes-pdf/Aj\xED-molido-salsa.pdf",
      description: "M\xE9langez aj\xED molido, huile d\u2019olive, sel et vinaigre. Laissez reposer 10 min avant utilisation."
    },
    {
      titre: "Arepas Farcies au Feij\xE3o & Chimichurri",
      url: "/recettes-pdf/Arepas-farcies.pdf",
      description: "R\xE9chauffez les arepas, faites revenir haricots noirs et chimichurri avec l\u2019oignon, puis garnissez les arepas."
    },
    {
      titre: "Bowl Tropical A\xE7a\xEF/Caj\xE1/Chuchu",
      url: "/recettes-pdf/Bowl-tropical.pdf",
      description: "Pelez caj\xE1 et chuchu, mixez avec l\u2019a\xE7a\xEF et le miel. Versez dans un bol, garnissez de granola et fruits frais."
    },
    {
      titre: "Cancha Croquante au Taj\xEDn",
      url: "/recettes-pdf/Cancha-taj\xEDn.pdf",
      description: "M\xE9langez la cancha (ma\xEFs grill\xE9) avec du taj\xEDn. Servez en snack ou en topping croustillant."
    },
    {
      titre: "Causa Lime\xF1a revisit\xE9 au Guacamole de Nopal",
      url: "/recettes-pdf/Causa-limena.pdf",
      description: "Pr\xE9parez une pur\xE9e de pommes de terre \xE0 l\u2019aj\xED amarillo, grillez le nopal, r\xE9alisez un guacamole \xE0 l\u2019avocat, puis assemblez en couches."
    },
    {
      titre: "Chicha Morada glac\xE9e maison",
      url: "/recettes-pdf/Chicha-morada.pdf",
      description: "Faites bouillir le ma\xEFs violet avec cannelle et fruits pendant 30 min, filtrez, sucrez et laissez refroidir avant service."
    },
    {
      titre: "Chorip\xE1n \xE0 la Sauce Huacatay",
      url: "/recettes-pdf/Choripan.pdf",
      description: "Grillez les chorizos, coupez les pains, garnissez de chorizo grill\xE9 et nappez de sauce huacatay."
    },
    {
      titre: "Coxinhas Fourr\xE9es au Poulet Marin\xE9",
      url: "/recettes-pdf/Coxinhas-fourr\xE9es.pdf",
      description: "M\xE9langez poulet effiloch\xE9, piment malagueta et fromage. Formez des boulettes, farcissez-les avec la p\xE2te puis faites frire."
    },
    {
      titre: "Cupua\xE7u Mousse Express",
      url: "/recettes-pdf/Cupua\xE7u-mousse-express.pdf",
      description: "Fouettez la cr\xE8me, incorporez d\xE9licatement la pur\xE9e de cupua\xE7u et le sucre, puis laissez reposer 1 h au frais."
    },
    // Deuxième série de PDFs
    {
      titre: "Taco de Nopal & Salsa Verte",
      url: "/recettes-pdf/Taco-de-nopal.pdf",
      description: "Faites griller le nopal tranch\xE9, pr\xE9parez la salsa verte avec tomatillos et jalape\xF1o, puis garnissez les tortillas."
    },
    {
      titre: "Tacos Sucr\xE9s \xE0 la Chirimoya et au Miel",
      url: "/recettes-pdf/Tacos-sucr\xE9s.pdf",
      description: "R\xE9chauffez les tortillas, garnissez de pulpe de chirimoya, arrosez de miel et saupoudrez d\u2019une pinc\xE9e de cannelle."
    },
    {
      titre: "Tostadas \xE0 la Papaye Mexicaine & Taj\xEDn",
      url: "/recettes-pdf/Tostadas.pdf",
      description: "\xC9pluchez et d\xE9coupez la papaye en d\xE9s, m\xE9langez-la avec du taj\xEDn et du jus de citron vert, puis disposez sur des tostadas."
    },
    {
      titre: "Elote revisit\xE9 fa\xE7on Street-Food Gourmet",
      url: "/recettes-pdf/Elote-revisite.pdf",
      description: "Faites cuire les \xE9pis de ma\xEFs, enrobez-les d\u2019une mayo \xE9pic\xE9e au taj\xEDn, puis parsemez de chicharrones et de fromage rall\xE9."
    },
    {
      titre: "Empanadas Sucr\xE9es \xE0 la Patate Douce & Lucuma",
      url: "/recettes-pdf/Empanadas-sucrees.pdf",
      description: "Faites cuire les patates douces, \xE9crasez-les avec lucuma et cannelle, d\xE9posez au centre des ronds de p\xE2te, puis cuisez au four."
    },
    {
      titre: "Dessert Granadilla au Lait de Coco",
      url: "/recettes-pdf/Granadilla-au-lait-de-coco.pdf",
      description: "Ouvrez les granadillas, r\xE9cup\xE9rez la pulpe, m\xE9langez-la au lait de coco et au sucre, puis servez frais."
    },
    {
      titre: "Guacamole de Pitahaya & Jalape\xF1o",
      url: "/recettes-pdf/Guacamole-de-pitahaya-et-jalapeno.pdf",
      description: "\xC9crasez les avocats avec jus de citron vert, ajoutez la pitahaya en d\xE9s et le jalape\xF1o \xE9minc\xE9, puis m\xE9langez d\xE9licatement."
    },
    {
      titre: "Pandebonos au Fromage Frais",
      url: "/recettes-pdf/Pandebonos.pdf",
      description: "M\xE9langez farine de manioc, fromage frais, \u0153uf et lait, formez des boules puis cuisez \xE0 180 \xB0C jusqu\u2019\xE0 dorure."
    },
    {
      titre: "Patacones Burger Fusion",
      url: "/recettes-pdf/Patacones-burger.pdf",
      description: "Faites frire les bananes plantains, pr\xE9parez la viande fa\xE7on chimichurri, puis montez le burger entre deux patacones."
    },
    {
      titre: "Smoothie Goyave-Lucuma",
      url: "/recettes-pdf/Smoothie-goyave-lucuma.pdf",
      description: "Mixez jus de goyave, banane, yaourt nature et lucuma en poudre jusqu\u2019\xE0 obtention d\u2019une texture lisse, servez frais."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "T\xE9l\xE9chargements de recettes (PDF)" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Titre principal --> <h1 class="text-3xl font-bold mb-6">Téléchargez nos recettes en PDF</h1> <p class="text-gray-600 mb-8">
Retrouvez ci-dessous toutes nos fiches recettes au format PDF.  
      Cliquez sur « Télécharger » pour récupérer chaque document sur votre appareil.
</p> <!-- Liste des recettes PDF --> <ul class="space-y-6"> ${listeDesPDF.map((item) => renderTemplate`<li class="bg-white shadow rounded-lg overflow-hidden"> <div class="flex flex-col sm:flex-row items-start sm:items-center p-6"> <!-- Colonne gauche : titre + description --> <div class="flex-1"> <h2 class="text-xl font-semibold text-gray-800">${item.titre}</h2> <p class="mt-2 text-gray-600">${item.description}</p> </div> <!-- Colonne droite : bouton "Télécharger" --> <div class="mt-4 sm:mt-0 sm:ml-6"> <a${addAttribute(item.url, "href")} download class="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
Télécharger
</a> </div> </div> </li>`)} </ul> </section> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/telechargements.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/telechargements.astro";
const $$url = "/telechargements";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Telechargements,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
