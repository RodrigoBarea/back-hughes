export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',       // tu frontend local
        'https://frontend-hughes.vercel.app/',      // tu dominio en prod
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
      ],
      keepHeadersOnError: true,
      credentials: false, // pon true SOLO si usas cookies/sesión entre front y back
      
       formLimit: '64mb',
      jsonLimit: '64mb',
      textLimit: '64mb',
      formidable: { maxFileSize: 64 * 1024 * 1024 }, // 64 MB
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
