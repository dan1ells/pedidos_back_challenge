'use strict'

const Cliente = use('App/Models/Cliente')
const AbstractRepository = use('App/Repositories/AbstractRepository')

class ClienteRepository extends AbstractRepository {
  constructor () {
    super(Cliente)
  }
}

module.exports = ClienteRepository
