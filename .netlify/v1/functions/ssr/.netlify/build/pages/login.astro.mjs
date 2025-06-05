import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D6lHauDs.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Connexion \u2013 GustoMundo" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="flex-grow flex items-center justify-center"> <section class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> <h1 class="text-2xl font-semibold mb-6 text-center">Connexion</h1> <form id="login-form" class="space-y-4"> <div> <label for="email" class="block text-gray-700 mb-1">Email</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-400 focus:border-red-400"> </div> <div> <label for="password" class="block text-gray-700 mb-1">Mot de passe</label> <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-400 focus:border-red-400"> </div> <button type="submit" class="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
Se connecter
</button> </form> <p id="message" class="mt-4 text-center text-red-600"></p> </section> </main> <script type="module">
    const form = document.getElementById('login-form');
    const messageEl = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      messageEl.textContent = '';

      const formData = new FormData(form);
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();

        if (res.ok && data.success) {
          window.location.href = '/dashboard';
        } else {
          messageEl.textContent = data.message || 'Informations invalides.';
        }
      } catch (err) {
        console.error(err);
        messageEl.textContent = 'Impossible de joindre le serveur.';
      }
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/login.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
