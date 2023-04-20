// vite.config.ts
import { defineConfig } from "file:///mnt/c/Users/taepr/Stuffs/Dev/thailand-election-2023/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///mnt/c/Users/taepr/Stuffs/Dev/thailand-election-2023/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import { resolve } from "path";
import cssInjectedByJsPlugin from "file:///mnt/c/Users/taepr/Stuffs/Dev/thailand-election-2023/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
var __vite_injected_original_dirname = "/mnt/c/Users/taepr/Stuffs/Dev/thailand-election-2023/packages/components";
var vite_config_default = defineConfig({
  plugins: [solidPlugin(), cssInjectedByJsPlugin()],
  server: {
    port: 3e3
  },
  build: {
    target: "esnext",
    sourcemap: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvdGFlcHIvU3R1ZmZzL0Rldi90aGFpbGFuZC1lbGVjdGlvbi0yMDIzL3BhY2thZ2VzL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy90YWVwci9TdHVmZnMvRGV2L3RoYWlsYW5kLWVsZWN0aW9uLTIwMjMvcGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvdGFlcHIvU3R1ZmZzL0Rldi90aGFpbGFuZC1lbGVjdGlvbi0yMDIzL3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtzb2xpZFBsdWdpbigpLCBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oKV0sXG5cdHNlcnZlcjoge1xuXHRcdHBvcnQ6IDMwMDAsXG5cdH0sXG5cdGJ1aWxkOiB7XG5cdFx0dGFyZ2V0OiAnZXNuZXh0Jyxcblx0XHRzb3VyY2VtYXA6IHRydWUsXG5cdFx0bGliOiB7XG5cdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcblx0XHRcdGZvcm1hdHM6IFsnZXMnXSxcblx0XHRcdGZpbGVOYW1lOiAnaW5kZXgnLFxuXHRcdH0sXG5cdH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFksU0FBUyxvQkFBb0I7QUFDdmEsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sMkJBQTJCO0FBSGxDLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7QUFBQSxFQUNoRCxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0osT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
