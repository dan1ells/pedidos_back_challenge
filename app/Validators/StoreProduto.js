'use strict'

class StoreProduto {
  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules () {
    return {
      nome: 'required',
      preco: 'required'
    }
  }

  get messages () {
    return {
      'nome.required': 'O nome deve ser informado',
      'preco.required': 'O preco deve ser informado'
    }
  }
}

module.exports = StoreProduto
