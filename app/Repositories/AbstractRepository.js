'use strict'

class AbstractRepository {
  constructor (model) {
    this._model = model
  }

  async listAll () {
    const model = await this._model
      .query()
      .select('*')
      .orderBy('created_at', 'desc')
      .fetch()

    return model
  }

  async show (id) {
    let model
    try { 
      model =  await this._model.findOrFail(id)
    } catch {
      throw new Error('Cadastro nao encontrado!')
    }

    return model
  }

  async create (data) {
    const model = await this._model.create(data)

    return model
  }

  async update (id, data) {
    let model

    try {
      model = await this._model.findOrFail(id)
    } catch {
      throw new Error('Cadastro não encontrado, verifique se o mesmo existe ou não foi apagado!')
    }
    
    model.merge(data)
    await model.save()

    return model
  }

  async destroy (id) {

    const model = await this._model.find(id)

    if (!model) { throw new Error('Entidade não encontrada') }

    try {
      await model.delete()
    } catch (error) {
      if(error.code.indexOf("ROW_IS_REFERENCED")>-1) {
        throw new Error('A entidade não pode ser removida, pois está contida em outro cadastro!')
      } else {
        throw new Error('Erro ao remover entidade!')
      }
    }

    return id
  }
}

module.exports = AbstractRepository
