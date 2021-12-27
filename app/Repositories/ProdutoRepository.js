'use strict'

const Produto = use('App/Models/Produto')
const AbstractRepository = use('App/Repositories/AbstractRepository')

class ProdutoRepository extends AbstractRepository {
  constructor () {
    super(Produto)
  }
}

module.exports = ProdutoRepository
