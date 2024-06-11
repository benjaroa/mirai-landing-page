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

Documentación: [CloudFlare Pages](https://developers.cloudflare.com/pages/)

## To-do

- [ ] Que cuando entres a /en aparezca el sitio en inglés
- [ ] Agregar una imágen de un ramen al slider de imágenes del encabezado
- [ ] Mejorar textos en español
- [ ] Pedirle a ayuda a alguien que nos haga una versión digna de los textos en inglés (guatón Osvaldo?)
- [ ] Revisar contenido
- [ ] Hacer formulario de contacto
- [ ] Optimizar SEO
- [ ] Mejorar links a las secciones del sitio para que sean reenviables
