'use strict'

class StoreCliente {
  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules () {
    return {
      nome: 'required',
      email: 'required|email',
      telefone: 'required',
      endereco: 'required'
    }
  }

  get messages () {
    return {
      'nome.required': 'O nome deve ser informado',
      'email.required': 'O email deve ser informado',
      'email.email': 'informe um email valido',
      'telefone.required': 'O telefone deve ser informado',
      'endereco.required': 'O endereco deve ser informado'
    }
  }
}

module.exports = StoreCliente
