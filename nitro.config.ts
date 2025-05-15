import { join } from "path";
import pkg from "./package.json";

export default defineNitroConfig({
  compatibilityDate: "2025-04-20",
  srcDir: "./src",
  publicAssets: [{ baseURL: "/", dir: "public" }],
  runtimeConfig: {
    version: pkg.version,
  },
  alias: {
    "@": join(__dirname, "src"),
  },
})

