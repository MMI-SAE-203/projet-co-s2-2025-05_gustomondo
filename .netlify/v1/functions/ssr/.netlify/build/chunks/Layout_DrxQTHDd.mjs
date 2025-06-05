import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, f as createAstro, h as addAttribute, j as renderHead, k as renderSlot } from './astro/server_l7TnKUXe.mjs';
import 'kleur/colors';
import { mergeProps, ref, onMounted, useSSRContext } from 'vue';
import PocketBase from 'pocketbase';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import 'clsx';
/* empty css                           */

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'AuthButtons',
  props: { mobile: Boolean },
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;
const pb = new PocketBase('http://127.0.0.1:8090');
const isLogged = ref(pb.authStore.isValid);

onMounted(() => {
  pb.authStore.onChange(() => {
    isLogged.value = pb.authStore.isValid;
  });
});

function logout() {
  pb.authStore.clear();
  window.location.href = '/';
}

const __returned__ = { props, pb, isLogged, logout, ref, onMounted, get PocketBase() { return PocketBase } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $props.mobile ? 'flex flex-col space-y-2' : 'flex space-x-3'
  }, _attrs))}>`);
  if ($setup.isLogged) {
    _push(`<!--[--><a href="/Compte" class="${
      ssrRenderClass($props.mobile
          ? 'block border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]'
          : 'border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]')
    }"> Mon compte </a><button class="${
      ssrRenderClass($props.mobile
          ? 'block bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200'
          : 'bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200')
    }"> Logout </button><!--]-->`);
  } else {
    _push(`<!--[--><a href="/login" class="${
      ssrRenderClass($props.mobile
          ? 'block border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]'
          : 'border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]')
    }"> Se connecter </a><a href="/Auth" class="${
      ssrRenderClass($props.mobile
          ? 'block bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200'
          : 'bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200')
    }"> Commencer </a><!--]-->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/AuthButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const AuthButtons = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header class="bg-gradient-to-r from-[#D2193E] to-[#F77468] py-4 px-6 relative z-50"> <div class="container mx-auto flex items-center justify-between"> <!-- Burger Mobile --> <button id="mobile-menu-button" class="order-1 block md:hidden text-white focus:outline-none" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <!-- Logo --> <a href="/" class="order-2 md:order-1 flex items-center"> <img src="/gustomondo-logo.png" alt="GustoMundo Logo" class="h-10 w-auto"> </a> <!-- Nav Desktop --> <nav class="hidden md:flex space-x-8 text-white font-medium order-3"> <a href="/Apropos" class="hover:underline">\xC0 Propos</a> <!-- Dropdown Service --> <div class="relative group"> <button class="flex items-center hover:underline focus:outline-none" aria-haspopup="true" aria-expanded="false">\nService\n<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Menu d\xE9roulant --> <div class="absolute left-0 top-full mt-1 w-44 bg-white text-black rounded shadow-lg py-2\n                 opacity-0 invisible pointer-events-none\n                 transition-opacity duration-100\n                 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto\n                 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto"> <a href="/catalogue" class="block px-4 py-2 hover:bg-gray-100">Catalogue</a> <a href="/recettes" class="block px-4 py-2 hover:bg-gray-100">Recettes</a> </div> </div> <a href="/Contact" class="hover:underline">Contact</a> </nav> <!-- Auth Buttons Desktop --> <div class="hidden md:flex items-center space-x-3 order-4"> ', ' </div> </div> <!-- Off-canvas Mobile Menu --> <div id="mobile-menu" class="fixed top-0 left-0 h-full w-64 bg-[#F77468] text-white shadow\n           transform -translate-x-full transition-transform duration-300 ease-in-out\n           md:hidden z-50 overflow-y-auto"> <div class="p-4 flex justify-end"> <button id="mobile-menu-close" class="text-white focus:outline-none" aria-label="Fermer le menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="mt-8 flex flex-col space-y-4 px-4"> <a href="/Apropos" class="hover:underline">\xC0 Propos</a> <a href="/catalogue" class="hover:underline">Catalogue</a> <a href="/recettes" class="hover:underline">Recettes</a> <a href="/Contact" class="hover:underline">Contact</a> </nav> <div class="mt-8 border-t border-white pt-4 px-4 space-y-4"> ', ` </div> </div> <!-- JS minimal pour le menu mobile --> <script type="module">
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
  <\/script> </header>`])), maybeRenderHead(), renderComponent($$result, "AuthButtons", AuthButtons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/AuthButtons.vue", "client:component-export": "default" }), renderComponent($$result, "AuthButtons", AuthButtons, { "mobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/AuthButtons.vue", "client:component-export": "default" }));
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

export { $$Layout as $, _export_sfc as _ };
