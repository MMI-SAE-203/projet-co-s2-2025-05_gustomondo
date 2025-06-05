import { e as createComponent, m as maybeRenderHead, r as renderTemplate, i as renderComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot } from './astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$AuthButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex space-x-3"> <a href="/login" class="px-4 py-2 bg-white text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition">
Connexion
</a> <a href="/register" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
Inscription
</a> </div>`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/AuthButtons.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header class="bg-gradient-to-r from-[#D2193E] to-[#F77468] py-4 px-6 relative z-50"> <div class="container mx-auto flex items-center justify-between"> <!-- Burger Mobile --> <button id="mobile-menu-button" class="order-1 block md:hidden text-white focus:outline-none" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <!-- Logo --> <a href="/" class="order-2 md:order-1 flex items-center"> <img src="/gustomondo-logo.png" alt="GustoMundo Logo" class="h-10 w-auto"> </a> <!-- Nav Desktop --> <nav class="hidden md:flex space-x-8 text-white font-medium order-3"> <a href="/Apropos" class="hover:underline">\xC0 Propos</a> <!-- Dropdown Service --> <div class="relative group"> <button class="flex items-center hover:underline focus:outline-none" aria-haspopup="true" aria-expanded="false">\nService\n<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Menu d\xE9roulant --> <div class="absolute left-0 top-full mt-1 w-44 bg-white text-black rounded shadow-lg py-2\n                 opacity-0 invisible pointer-events-none\n                 transition-opacity duration-100\n                 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto\n                 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto"> <a href="/catalogue" class="block px-4 py-2 hover:bg-gray-100">Catalogue</a> <a href="/recettes" class="block px-4 py-2 hover:bg-gray-100">Recettes</a> <a href="/telechargements" class="block px-4 py-2 hover:bg-gray-100">E\u2010books</a> </div> </div> <a href="/Contact" class="hover:underline">Contact</a> </nav> <!-- Auth Buttons Desktop --> <div class="hidden md:flex items-center space-x-3 order-4"> ', ` </div> </div> <!-- Off\u2010canvas Mobile Menu --> <div id="mobile-menu" class="fixed top-0 left-0 h-full w-64 bg-[#F77468] text-white shadow
           transform -translate-x-full transition-transform duration-300 ease-in-out
           md:hidden z-50 overflow-y-auto"> <div class="p-4 flex justify-end"> <button id="mobile-menu-close" class="text-white focus:outline-none" aria-label="Fermer le menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="mt-8 flex flex-col space-y-4 px-4"> <a href="/Apropos" class="hover:underline">\xC0 Propos</a> <a href="/catalogue" class="hover:underline">Catalogue</a> <a href="/recettes" class="hover:underline">Recettes</a> <a href="/Contact" class="hover:underline">Contact</a> <a href="/telechargements" class="hover:underline">E\u2010books</a> </nav> <div class="mt-8 border-t border-white pt-4 px-4 space-y-4"></div> </div> <!-- JS minimal pour le menu mobile --> <script type="module">
    const openBtn  = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('mobile-menu-close');
    const menu     = document.getElementById('mobile-menu');

    openBtn.addEventListener('click', () => {
      menu.classList.remove('-translate-x-full');
      openBtn.setAttribute('aria-expanded', 'true');
    });
    closeBtn.addEventListener('click', () => {
      menu.classList.add('-translate-x-full');
      openBtn.setAttribute('aria-expanded', 'false');
    });
  <\/script> </header>`])), maybeRenderHead(), renderComponent($$result, "AuthButtons", $$AuthButtons, {}));
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-red-400 text-white pt-10"> <!-- Première rangée : Trois colonnes --> <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Colonne 1 : Présentation GustoMondo + Réseaux sociaux --> <div> <h2 class="text-xl font-semibold mb-2">GustoMondo</h2> <p class="leading-relaxed">
Découvrez des produits authentiques du monde entier, 
          sélectionnés avec soin pour une expérience culinaire unique.
</p> <!-- Icônes réseaux sociaux --> <div class="flex space-x-4 mt-4"> <!-- Exemple : utilisez des SVG/icônes de votre choix dans /public/icons/ --> <a href="#" aria-label="Facebook" class="hover:text-gray-200 transition duration-300"> <img src="facebook.svg" alt="Facebook" class="w-6 h-6"> </a> <a href="#" aria-label="LinkedIn" class="hover:text-gray-200 transition duration-300"> <img src="linkedin.svg" alt="LinkedIn" class="w-6 h-6"> </a> <a href="#" aria-label="Instagram" class="hover:text-gray-200 transition duration-300"> <img src="instagram.svg" alt="Instagram" class="w-6 h-6"> </a> </div> </div> <!-- Colonne 2 : Navigation principale --> <div> <h3 class="text-lg font-semibold mb-2">Navigation</h3> <ul class="space-y-2"> <li> <a href="/" class="hover:underline">Accueil</a> </li> <li> <a href="/a-propos" class="hover:underline">À Propos</a> </li> <li> <a href="/service" class="hover:underline">Service</a> </li> <li> <a href="/contact" class="hover:underline">Contact</a> </li> </ul> </div> <!-- Colonne 3 : Contact --> <div> <h3 class="text-lg font-semibold mb-2">Contact</h3> <p class="mb-1">01 23 45 67 89</p> <p class="mb-4">contact@gustomondo.fr</p> </div> </div> <!-- Bandeau inférieur avec ligne de séparation, logo, mentions légales, etc. --> <div class="border-t border-white mt-8"> <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"> <!-- Logo + © --> <div class="flex items-center space-x-2"> <!-- Logo si souhaité en bas --> <img src="gustomondo-logo.png" alt="GustoMondo Logo" class="h-8 w-auto"> <p>© 2025 GustoMondo, All Rights Reserved</p> </div> <!-- Mentions légales et autres liens --> <div class="flex flex-wrap items-center justify-center space-x-3 text-sm"> <a href="#" class="hover:underline">COOKIES</a> <span>|</span> <a href="#" class="hover:underline">MENTIONS LÉGALES</a> <span>|</span> <a href="#" class="hover:underline">SAV</a> <span>|</span> <a href="#" class="hover:underline">CGV</a> <span>|</span> <a href="#" class="hover:underline">POLITIQUE DE CONFIDENTIALITÉ</a> </div> </div> </div> </footer>`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
