'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const MapperService = use('Yogarevy/Src/MapperService')

class MapperServiceProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    //
    this.app.singleton('Mapper', () => {
      // const MapperService = require('../src/MapperService')
      return new MapperService()
    })
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    //
  }
}

module.exports = MapperServiceProvider
