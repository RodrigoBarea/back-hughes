// crea/edita este archivo
module.exports = () => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 25 * 1024 * 1024, // 25 MB por archivo
      },
      // Desactiva formatos responsivos para aliviar a sharp (puedes reactivar luego)
      breakpoints: {},
    },
  },
});

