'use strict'

const Pedido = use('App/Models/Pedido')
const AbstractRepository = use('App/Repositories/AbstractRepository')

class PedidoRepository extends AbstractRepository {
  constructor () {
    super(Pedido)
  }
}

module.exports = PedidoRepository
