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

## Flujo de trabajo

- te cambias a la rama `test` (`git checkout test`)
- traes los últimos cambios de `main` (`git pull origin main`)
- trabajas, siempre empujando tus avances en la rama `test` (`git add`, `git commit`, `git push origin main`)
- creas un `pull request` desde `test` a `main` (con o sin eliminar `test`, después puedes volver a crearla)
- revisas que esté todo bien, y le mandas a `main`

## Environments

main => https://www.miraifoodlab.cl
test => https://test.miraifoodlab.cl