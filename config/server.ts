export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: { keys: env.array('APP_KEYS') },

  // IMPORTANTE: NO uses slash final aquí
  url: env('PUBLIC_URL', 'https://back-hughes-1.onrender.com'),

  proxy: true,

  // Habilita Data Transfer
  transfer: {
    enabled: env.bool('STRAPI_TRANSFER_ENABLED', true),
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
