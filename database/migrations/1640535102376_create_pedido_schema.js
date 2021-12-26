'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreatePedidoSchema extends Schema {
  up () {
    this.create('pedido', (table) => {
      table.increments()
      table.date('data_criacao')
      table.enu('status', ['pendente', 'em preparo', 'em entrega', 'entregue', 'cancelado']).defaultTo('pendente')
      table.integer('cliente_id').unsigned().references('id')
        .inTable('cliente').onDelete('cascade')
      table.integer('produto_id').unsigned().references('id')
        .inTable('produto').onDelete('restrict')
      table.timestamps()
    })
  }

  down () {
    this.drop('pedido')
  }
}

module.exports = CreatePedidoSchema
