/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Measurement ID Google Analytics 4 (ex. G-XXXXXXXXXX). Défini via .env / Render. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}
