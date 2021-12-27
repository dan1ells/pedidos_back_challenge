const PedidoRepository = use('App/Repositories/PedidoRepository')

class PedidoService {
  constructor () {
    this._repository = new PedidoRepository()
  }

  async listAll () {
    return await this._repository.listAll()
  }

  async show (id) {
    if (id) return await this._repository.show(id)

    throw new Error('Necessário informar o pedido')
  }

  async create (data) {
    const pedido = await this._repository.create(data)

    return pedido
  }

  async update (id, data) {
    const pedido = await this._repository.update(id, data)

    return pedido
  }

  async destroy (id, clienteId) {

    const pedido = await this.show(id)

    if (pedido.cliente_id === clienteId) {
      return await this._repository.destroy(id)
    } else {
      throw new Error('Cliente nao tem permissao para excluir este pedido')
    }
  }
}

module.exports = PedidoService
