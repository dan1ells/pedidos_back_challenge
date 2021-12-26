'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProdutoSchema extends Schema {
  up () {
    this.create('produto', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.decimal('preco',8,2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produto')
  }
}

module.exports = CreateProdutoSchema
