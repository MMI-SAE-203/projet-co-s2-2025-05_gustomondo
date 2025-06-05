import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, j as renderScript } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D6lHauDs.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center justify-center py-12"> <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> <h1 class="text-2xl font-semibold mb-6 text-center">Inscription</h1> <form id="register-form" class="space-y-4" enctype="multipart/form-data"> <!-- Email --> <div> <label for="email" class="block text-gray-700 mb-1">Email</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-400 focus:border-green-400"> </div> <!-- Username --> <div> <label for="username" class="block text-gray-700 mb-1">Nom d'utilisateur</label> <input type="text" id="username" name="username" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-400 focus:border-green-400"> </div> <!-- Avatar (upload) --> <div> <label for="avatar" class="block text-gray-700 mb-1">Avatar (image)</label> <input type="file" id="avatar" name="avatar" accept="image/*" required class="w-full"> </div> <!-- Mot de passe --> <div> <label for="password" class="block text-gray-700 mb-1">Mot de passe</label> <input type="password" id="password" name="password" required minlength="6" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-400 focus:border-green-400"> </div> <!-- Confirmation mot de passe --> <div> <label for="confirm-password" class="block text-gray-700 mb-1">Confirmer le mot de passe</label> <input type="password" id="confirm-password" name="confirmPassword" required minlength="6" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-400 focus:border-green-400"> </div> <!-- Bouton de soumission --> <div class="pt-4"> <button type="submit" class="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
Créer mon compte
</button> </div> </form> <!-- Zone d'affichage des messages --> <p id="message" class="mt-4 text-center"></p> </div> </section> ${renderScript($$result2, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/register.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/register.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
