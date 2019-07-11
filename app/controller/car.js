const Controller = require('egg').Controller

class CarController extends Controller {
  async index() {
    const {
      ctx,
      service
    } = this
    const {
      id
    } = ctx.request.query
    const res = await service.car.show(id)
    this.ctx.body = res
  }
}

module.exports = CarController