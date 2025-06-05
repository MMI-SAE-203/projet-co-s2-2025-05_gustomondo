import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DPrxAKir.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/login.astro.mjs');
const _page2 = () => import('./pages/api/logout.astro.mjs');
const _page3 = () => import('./pages/api/register.astro.mjs');
const _page4 = () => import('./pages/apropos.astro.mjs');
const _page5 = () => import('./pages/catalogue/_id_.astro.mjs');
const _page6 = () => import('./pages/catalogue.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/dashboard.astro.mjs');
const _page9 = () => import('./pages/login.astro.mjs');
const _page10 = () => import('./pages/recettes/_id_.astro.mjs');
const _page11 = () => import('./pages/recettes.astro.mjs');
const _page12 = () => import('./pages/register.astro.mjs');
const _page13 = () => import('./pages/telechargements.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/login.js", _page1],
    ["src/pages/api/logout.js", _page2],
    ["src/pages/api/register.js", _page3],
    ["src/pages/Apropos.astro", _page4],
    ["src/pages/catalogue/[id].astro", _page5],
    ["src/pages/catalogue/index.astro", _page6],
    ["src/pages/Contact.astro", _page7],
    ["src/pages/dashboard.astro", _page8],
    ["src/pages/login.astro", _page9],
    ["src/pages/recettes/[id].astro", _page10],
    ["src/pages/recettes/index.astro", _page11],
    ["src/pages/register.astro", _page12],
    ["src/pages/telechargements.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d7de9f6c-aec7-496f-8675-193c934a3664"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
