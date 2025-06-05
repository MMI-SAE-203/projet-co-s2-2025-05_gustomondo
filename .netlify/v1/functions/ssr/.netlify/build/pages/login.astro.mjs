import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_l7TnKUXe.mjs';
import 'kleur/colors';
import { _ as _export_sfc, $ as $$Layout } from '../chunks/Layout_DrxQTHDd.mjs';
import { useSSRContext, ref, mergeProps } from 'vue';
import PocketBase from 'pocketbase';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

// URL locale de PocketBase

const _sfc_main = {
  __name: 'LoginForm',
  setup(__props, { expose: __expose }) {
  __expose();

const pb = new PocketBase('http://127.0.0.1:8090');

// Champs liés à l'interface
const email = ref('');
const password = ref('');
const message = ref('');
const isError = ref(false);

async function login() {
  if (!email.value || !password.value) {
    message.value = 'Veuillez remplir tous les champs.';
    isError.value = true;
    return
  }
  try {
    await pb.collection('users').authWithPassword(email.value, password.value);
    message.value = 'Connexion réussie ✅';
    isError.value = false;
    setTimeout(() => (window.location.href = '/Compte'), 1000);
  } catch (err) {
    message.value = err.message || 'Email ou mot de passe incorrect';
    isError.value = true;
  }
}

const __returned__ = { pb, email, password, message, isError, login, ref, get PocketBase() { return PocketBase } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative max-w-md mx-auto mt-12" }, _attrs))} data-v-903a546b><div class="border-4 border-[#1f6659] rounded-lg bg-white pt-12 pb-6 px-6 shadow-lg" data-v-903a546b><div class="absolute left-1/2 transform -translate-x-1/2 -top-8" data-v-903a546b><div class="bg-[#1f6659] w-16 h-16 rounded-full flex items-center justify-center" data-v-903a546b><img src="/images/gustomondo-logo.png" alt="GustoMundo" class="h-10 w-auto" data-v-903a546b></div></div>`);
  if ($setup.message) {
    _push(`<div class="${
      ssrRenderClass([$setup.isError
            ? 'bg-red-100 border-red-300 text-red-800'
            : 'bg-green-100 border-green-300 text-green-800', "border p-3 rounded-md mb-4 text-center text-sm"])
    }" data-v-903a546b>${
      ssrInterpolate($setup.message)
    }</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h2 class="text-xl font-bold text-center text-[#1f6659] mb-6" data-v-903a546b>Se connecter</h2><div class="space-y-4" data-v-903a546b><div data-v-903a546b><label class="block mb-1 text-sm text-gray-700" data-v-903a546b>Email</label><input${
    ssrRenderAttr("value", $setup.email)
  } type="email" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" required data-v-903a546b></div><div data-v-903a546b><label class="block mb-1 text-sm text-gray-700" data-v-903a546b>Mot de passe</label><input${
    ssrRenderAttr("value", $setup.password)
  } type="password" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" required data-v-903a546b></div><button class="w-full bg-[#D2193E] text-white py-2 rounded-lg hover:bg-red-600 transition" data-v-903a546b> Se connecter </button></div><p class="mt-4 text-center text-sm text-gray-600" data-v-903a546b> Pas encore de compte ? <a href="/Auth" class="text-[#1f6659] hover:underline" data-v-903a546b>Créer un compte</a></p></div><p class="mt-6 text-center text-xs text-gray-500" data-v-903a546b>© 2025 GustoMundo. Tous droits réservés.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/LoginForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const LoginForm = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-903a546b"]]);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Se connecter \xE0 GustoMundo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#f9f5ea] flex items-center justify-center"> ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/LoginForm.vue", "client:component-export": "default" })} </main> ` })}`;
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
