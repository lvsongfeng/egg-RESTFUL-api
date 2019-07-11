const Service = require('egg').Service

class CarService extends Service {
  async show(id) {
    const {
      ctx,
    } = this
    const res = await ctx.model.Car.find({
      id
    })
    return res
  }
}
module.exports = CarService