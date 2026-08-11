import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // GitHub Pages publishes this repository under:
  // https://<username>.github.io/FarmMarshal_Presentation/
  // The value is case-sensitive and must match the repository name.
  base: "/FarmMarshal_Presentation/"
});
