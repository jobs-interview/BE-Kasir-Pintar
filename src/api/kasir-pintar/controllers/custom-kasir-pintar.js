module.exports = { 
  async getDataById(ctx) { 
    if(!ctx.query.type) {
      const result = await strapi.services["api::kasir-pintar.custom-kasir-pintar"].getDataById(ctx.params.id);
      return result
    } else
    {
      const result = await strapi.services["api::kasir-pintar.custom-kasir-pintar"].getDataBySubId(ctx.params.id, ctx.query.type);
      return result
    }
  },

}