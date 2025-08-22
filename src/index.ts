// src/index.ts
export default {
  async bootstrap({ strapi }) {
    // 1) Asegurar roles base
    const Role = strapi.db.query('plugin::users-permissions.role');
    const upsertRole = async (type: 'public' | 'authenticated', name: string) => {
      const r = await Role.findOne({ where: { type } });
      if (r) {
        await Role.update({ where: { id: r.id }, data: { name } });
        return r;
      }
      return Role.create({ data: { name, type, description: name } });
    };

    const publicRole = await upsertRole('public', 'Public');
    const authenticatedRole = await upsertRole('authenticated', 'Authenticated');

    // 2) Habilitar permisos públicos de lectura (AJUSTA las acciones a tus colecciones)
    const actions = [
      'api::blog.blog.find',
      'api::blog.blog.findOne',
      'api::newspaper.newspaper.find',
      'api::newspaper.newspaper.findOne',
      'api::testimonial.testimonial.find',
      'api::testimonial.testimonial.findOne',
    ];

    const Permission = strapi.db.query('plugin::users-permissions.permission');
    for (const action of actions) {
      const existing = await Permission.findOne({
        where: { action, role: publicRole.id },
      });
      if (existing) {
        await Permission.update({
          where: { id: existing.id },
          data: { enabled: true },
        });
      } else {
        await Permission.create({
          data: { action, role: publicRole.id, enabled: true },
        });
      }
    }

    // (Opcional) Permisos para 'authenticated'
    // Repite el mismo patrón si necesitas habilitar acciones para usuarios logueados.
  },
};
