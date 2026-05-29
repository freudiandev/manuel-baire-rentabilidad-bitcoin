import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const routes = [
  "/manuel-beiro",
  "/rentabilidad-bitcoin",
  "/trading-algoritmico-bitcoin",
  "/bots-trading-bitcoin",
  "/ia-cripto",
  "/powerbitcoin",
  "/portafolio",
  "/servicios",
  "/telegram",
  "/transparencia",
  "/guias",
  "/guias/que-es-bitcoin",
  "/guias/rentabilidad-bitcoin-gestion-riesgo",
  "/guias/bots-trading-criptomonedas",
  "/guias/api-exchange-cripto",
  "/guias/trading-manual-vs-automatizado",
  "/guias/ia-aplicada-trading-cripto",
  "/guias/btc-usdt",
  "/guias/evaluar-proyecto-cripto",
  "/guias/exchange-sin-custodia",
  "/guias/bitcoin-principiantes",
  "/guias/manuel-beiro-rentabilidad-bitcoin",
  "/guias/trading-algoritmico-bitcoin",
  "/guias/promesas-falsas-rentabilidad-cripto",
  "/guias/portafolio-ia-cripto-powerbitcoin"
];

const dist = "dist";
const source = join(dist, "index.html");

if (!existsSync(source)) {
  throw new Error("dist/index.html does not exist. Run vite build first.");
}

for (const route of routes) {
  const target = join(dist, route, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}

console.log(`Prepared ${routes.length} static route entrypoints for Vercel.`);
