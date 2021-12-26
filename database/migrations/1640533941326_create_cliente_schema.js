'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateClienteSchema extends Schema {
  up () {
    this.create('cliente', (table) => {
      table.increments()
      table.string('nome', 300).notNullable()
      table.string('email').unique().notNullable()
      table.string('telefone').unique().notNullable()
      table.string('endereco').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cliente')
  }
}

module.exports = CreateClienteSchema
