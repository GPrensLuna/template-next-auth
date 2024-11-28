const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_e5dd75._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__f41634._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.26.0_babel-plugin-react-compiler@19.0.0-beta-df7b47d-20241124_react_jxnfxd3e7uzteb6rv5q2kxy6vm/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
