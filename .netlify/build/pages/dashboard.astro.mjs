import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cp7Txubb.mjs';
import { c as getUserFromToken } from '../chunks/backend_i0PyPw_S.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const cookieHeader = Astro2.request.headers.get("cookie") || "";
  function getCookieValue(header, name) {
    const match = header.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
    if (!match) return null;
    return decodeURIComponent(match.split("=")[1]);
  }
  const token = getCookieValue(cookieHeader, "pb_token");
  let user = null;
  let errorMessage = null;
  if (token) {
    user = await getUserFromToken(token);
    if (!user) {
      errorMessage = "Session invalide ou expir\xE9e. Merci de vous reconnecter.";
    }
  } else {
    errorMessage = "Vous n\u2019\xEAtes pas connect\xE9(e).";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon Compte \u2013 GustoMundo" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col items-center py-12"> <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> <h1 class="text-2xl font-semibold mb-6 text-center">Mon compte</h1> ${errorMessage && renderTemplate`<div class="text-red-600 text-center mb-4"> ${errorMessage} <p><a href="/login" class="text-blue-600 hover:underline">Aller à la connexion</a></p> </div>`} ${user && renderTemplate`<div class="flex flex-col items-center"> ${user.avatarUrl ? renderTemplate`<img${addAttribute(user.avatarUrl, "src")}${addAttribute(`Avatar de ${user.username}`, "alt")} class="w-24 h-24 rounded-full mb-4">` : renderTemplate`<div class="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center"> <span class="text-gray-500 text-xl">?</span> </div>`} <p class="text-gray-700 mb-2"><strong>Pseudo :</strong> ${user.username}</p> <p class="text-gray-700 mb-2"><strong>Email :</strong> ${user.email}</p> <form method="post" action="/api/logout" class="mt-4 w-full"> <button type="submit" class="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
Se déconnecter
</button> </form> </div>`} </div> </section> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
