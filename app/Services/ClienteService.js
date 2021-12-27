const ClienteRepository = use('App/Repositories/ClienteRepository')

class ClienteService {
  constructor () {
    this._repository = new ClienteRepository()
  }

  async listAll () {
    return await this._repository.listAll()
  }

  async show (id) {
    if (id) return await this._repository.show(id)

    throw new Error('Necessário informar o cliente')
  }

  async create (data) {
    const cliente = await this._repository.create(data)

    return cliente
  }

  async update (id, data) {
    const cliente = await this._repository.update(id, data)

    return cliente
  }

  async destroy (id) {
    if (id) return await this._repository.destroy(id)

    throw new Error('Necessário informar o cliente')
  }
}

module.exports = ClienteService
