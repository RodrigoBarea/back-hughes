export default {
  async beforeCreate(event) {
    const data = event.params.data;
    if (!data || !data.student || !data.schoolYear) return;

    const studentId = data.student?.connect?.id || data.student; // depende cómo lo tengas
    const year = data.schoolYear;

    const existing = await strapi.entityService.findMany("api::seat-reservation.seat-reservation", {
      filters: {
        student: { id: { $eq: studentId } },
        schoolYear: { $eq: year },
      },
      limit: 1,
    });

    if (existing && existing.length > 0) {
      throw new Error("Ya existe una reserva para este estudiante en ese año.");
    }
  },
};
