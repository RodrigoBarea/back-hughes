// config/database.ts
import path from 'path';

export default ({ env }) => {
  const hasDatabaseUrl = !!env('DATABASE_URL');

  // Producción (Render): usa Postgres
  if (hasDatabaseUrl) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          // Render requiere SSL; su CA no es pública, así que desactivamos la verificación
          ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
        },
        pool: {
          min: env.int('DATABASE_POOL_MIN', 2),
          max: env.int('DATABASE_POOL_MAX', 10),
        },
        acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
      },
    };
  }

  // Desarrollo local: SQLite (sin configurar nada de DB)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(
          __dirname,
          '..',
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db'),
        ),
      },
      useNullAsDefault: true,
    },
  };
};
