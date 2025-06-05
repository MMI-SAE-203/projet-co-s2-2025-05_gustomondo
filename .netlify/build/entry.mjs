import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CU5MS5ZS.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/apropos.astro.mjs');
const _page2 = () => import('./pages/auth.astro.mjs');
const _page3 = () => import('./pages/catalogue/_id_.astro.mjs');
const _page4 = () => import('./pages/catalogue.astro.mjs');
const _page5 = () => import('./pages/compte.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/login.astro.mjs');
const _page8 = () => import('./pages/recettes/_id_.astro.mjs');
const _page9 = () => import('./pages/recettes.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/Apropos.astro", _page1],
    ["src/pages/Auth.astro", _page2],
    ["src/pages/catalogue/[id].astro", _page3],
    ["src/pages/catalogue/index.astro", _page4],
    ["src/pages/Compte.astro", _page5],
    ["src/pages/Contact.astro", _page6],
    ["src/pages/login.astro", _page7],
    ["src/pages/recettes/[id].astro", _page8],
    ["src/pages/recettes/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "23031c5b-967d-4bdf-bd39-e483dba2783c"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
