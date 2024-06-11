# Mirai Landing

Sitio que muestra de forma sencilla y directa qué es mirai.

## Ingredientes

- React
- Vite
- Shadcn
- Tailwind
- i18next
- wouter

## Variables de entorno

```sh
NODE_ENV=dev
```

## Scripts

```sh
npm run dev
npm run build
```

## Integración continua

Al empujar a la rama main, se gatilla un proceso en CloudFlare que escucha un evento de GitHub y despliega el código usando `npm run build` y el contenido de la carpeta `/dist`.

Para empujar sin pasar por el CI, agregar en el mensaje del commit: `[CI Skip]`, `[CI-Skip]`, `[Skip CI]`, `[Skip-CI]` or `[CF-Pages-Skip]` (case insensitive).

Documentación: [CloudFlare Pages](https://developers.cloudflare.com/pages/)
