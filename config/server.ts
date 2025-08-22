module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'https://back-hughes-1.onrender.com/'), // URL de tu app en Render
  proxy: true,
  cors: {
    origin: [
      'https://frontend-hughes.vercel.app/', // Tu dominio de Vercel
      'http://localhost:3000', // Para desarrollo local
    ],
  },
});
