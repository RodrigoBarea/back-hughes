// config/middlewares.ts
export default [
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // permite llamadas y websockets
          'connect-src': ["'self'", 'https:', 'http:', 'ws:', 'wss:'],
          // permite cargar imágenes y media desde https (Cloudinary, Render, etc.)
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'frame-src': ["'self'", 'https:', 'http:'],
        },
      },
    },
  },

  {
    name: 'strapi::cors',
    config: {
      // AGREGA AQUÍ tus orígenes permitidos (frontend en producción y local)
      origin: [
        'https://frontend-hughes.vercel.app',
        'http://localhost:3000',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'Keep-Alive',
        'User-Agent',
        'Cache-Control',
        'X-Requested-With',
      ],
      credentials: true,
      keepHeadersOnError: true,
    },
  },

  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
