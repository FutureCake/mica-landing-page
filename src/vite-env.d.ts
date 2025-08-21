/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_TIMEOUT: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
