# Clases de Batería — sitio web

Sitio construido con **Next.js 16 + Tailwind CSS**, mobile-first.

## Estructura de páginas

- `/` — Inicio
- `/quien-hace-las-clases` — El profesor
- `/que-vas-a-aprender` — Método y equipo
- `/cuanto-cuesta` — Precios
- `/aprende-canciones` — Repertorio
- `/contacto` — WhatsApp / Instagram

El botón flotante de WhatsApp aparece en todas las páginas
(`components/WhatsappFloat.tsx`). El número y el mensaje por
defecto se configuran en `lib/site.ts`.

## Agregar tus imágenes

Todas las imágenes están como placeholders con su `alt` ya escrito.
Solo copia tus archivos a `public/images/` con estos nombres
(ver detalle en `public/images/README.md`):

- `hero-bateria.jpg`
- `profesor-retrato.jpg`
- `bateria-pearl-rhythm-traveler.jpg`
- `alesis-nitro-mesh.jpg`

No necesitas tocar ningún código: apenas el archivo exista en esa
ruta, reemplaza automáticamente el placeholder.

## Correr el sitio en tu computador

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Publicar: GitHub + Vercel + nic.cl

1. **GitHub**: crea un repositorio nuevo y sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Sitio clases de batería"
   git branch -M main
   git remote add origin <URL_DE_TU_REPO>
   git push -u origin main
   ```

2. **Vercel**: entra a vercel.com, "Add New Project", importa el
   repositorio de GitHub. Vercel detecta Next.js automáticamente,
   no necesitas configurar nada más. Cada `git push` a `main`
   despliega solo.

3. **nic.cl**: en el panel de Vercel, ve a Project → Settings →
   Domains, agrega tu dominio (ej. `clasesdebateria.cl`). Vercel te
   va a mostrar los registros DNS (A/CNAME) que debes cargar en el
   panel de nic.cl. Una vez propagado (puede tardar algunas horas),
   el sitio queda en tu dominio con HTTPS automático.
