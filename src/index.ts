export default {
  async bootstrap({ strapi }) {
    if (process.env.SEED_PUBLIC_PERMISSIONS !== 'true') return;

    try {
      const roleService = strapi.service('plugin::users-permissions.role');
      // 1 = Public en Users & Permissions por defecto
      const publicRole = await roleService.findOne(1);

      // Activa find / findOne de tus colecciones (ajusta UIDs a los tuyos)
      await roleService.updateRole(publicRole.id, {
        permissions: {
          'api::blog.blog':      { find: true, findOne: true },
          'api::newspaper.newspaper': { find: true, findOne: true },
          'api::testimonial.testimonial': { find: true, findOne: true },
        },
      });

      strapi.log.info('Public permissions seeded');
    } catch (e) {
      strapi.log.error('Seeding permissions failed', e);
    }
  },
};
