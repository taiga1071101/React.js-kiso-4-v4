import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  base: "/React.js-kiso-4-v4/",
  // build: {
  //   rollupOptions: {
  //     input: 'index.html', // CSR用
  //   },
  //   outDir: 'dist/client',  // CSRの出力先
  //   ssr: 'src/server/main.ssr.tsx',
  // },
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist/client',  // SSR と CSR の出力先を分ける
    rollupOptions: isSsrBuild
      ? { input: 'src/server/main.ssr.tsx' }  // SSR のエントリーポイント
      : { input: 'index.html' },  // CSR のエントリーポイント
  },
  plugins: [react()],
}));
