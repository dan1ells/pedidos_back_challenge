const ProdutoRepository = use('App/Repositories/ProdutoRepository')

class ProdutoService {
  constructor () {
    this._repository = new ProdutoRepository()
  }

  async listAll () {
    return await this._repository.listAll()
  }

  async show (id) {
    if (id) return await this._repository.show(id)

    throw new Error('Necessário informar o produto')
  }

  async create (data) {
    const produto = await this._repository.create(data)

    return produto
  }

  async update (id, data) {
    const produto = await this._repository.update(id, data)

    return produto
  }

  async destroy (id) {
    if (id) return await this._repository.destroy(id)

    throw new Error('Necessário informar o produto')
  }
}

module.exports = ProdutoService
