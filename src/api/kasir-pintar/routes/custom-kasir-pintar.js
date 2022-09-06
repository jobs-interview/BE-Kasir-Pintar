module.exports = {
  routes: [
    {
      method: "GET",
      path: "/kasir-pintar/custom-kasir-pintar/:id",
      handler: "custom-kasir-pintar.getDataById",
      config: {
        policies: [],
        middlewares: [],
      },
    },

  ],
};
