'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

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
    this.app.singleton('MapperService', () => {
      const MapperService = require('../src/MapperService')
      return new MapperService()
    })

    this.app.singleton('BaseMapper', () => {
      const BaseMapper = require('../src/BaseMapper')
      return new BaseMapper()
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
