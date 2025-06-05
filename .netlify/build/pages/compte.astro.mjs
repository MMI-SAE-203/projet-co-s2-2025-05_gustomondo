import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_l7TnKUXe.mjs';
import 'kleur/colors';
import { _ as _export_sfc, $ as $$Layout } from '../chunks/Layout_DrxQTHDd.mjs';
import { useSSRContext, ref, onMounted, mergeProps } from 'vue';
import PocketBase from 'pocketbase';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const _sfc_main = {
  __name: 'AccountInfo',
  setup(__props, { expose: __expose }) {
  __expose();

const pb = new PocketBase('http://127.0.0.1:8090');
const user = ref(null);

// Au chargement, on récupère l’utilisateur ou on redirige vers /login s’il n’est pas connecté
onMounted(() => {
  if (!pb.authStore.isValid) {
    window.location.href = '/Login';
    return;
  }
  user.value = pb.authStore.model;
});

function logout() {
  pb.authStore.clear();
  window.location.href = '/';
}

const __returned__ = { pb, user, logout, ref, onMounted, get PocketBase() { return PocketBase } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4 mt-12" }, _attrs))}><h2 class="text-2xl font-semibold text-center text-[#1f6659]">Mon compte</h2>`);
  if ($setup.user) {
    _push(`<div><p><strong>Nom :</strong> ${
      ssrInterpolate($setup.user.name || '—')
    }</p><p><strong>Email :</strong> ${
      ssrInterpolate($setup.user.email)
    }</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="text-center"><button class="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"> Se déconnecter </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/AccountInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const AccountInfo = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Compte = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon compte \u2013 GustoMundo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#f9f5ea] flex items-center justify-center"> ${renderComponent($$result2, "AccountInfo", AccountInfo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/AccountInfo.vue", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/Compte.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/Compte.astro";
const $$url = "/Compte";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Compte,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
