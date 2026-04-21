/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_RISTORANTE_ID: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
