'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    static get table() {
        return 'produto';
       }
}

module.exports = Produto
