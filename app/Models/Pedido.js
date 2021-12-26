'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
// const { format } = use('date-fns')

class Pedido extends Model {
    static get table() {
        return 'pedido';
       }

    // getDataCriacao (dataCriacao) {
    //   if (dataCriacao) { return format(dataCriacao, 'yyyy-MM-dd') }
    // }
}

module.exports = Pedido
