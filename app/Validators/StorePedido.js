'use strict'

class StorePedido {
  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules () {
    return {
      data_criacao: 'required|date',
      status: 'required| in:pendente, em preparo, em entrega, entregue, cancelado',
      cliente_id: 'required|integer',
      produto_id: 'required|integer'
    }
  }

  get messages () {
    return {
      'data_criacao.required': 'a data deve ser informada',
      'date': 'Informe uma data valida',
      'status.required': 'O status deve ser informado',
      'status.in': 'O status informado e invalido',
      'cliente_id.required': 'O cliente deve ser informado',
      'produto_id.required': 'O produto deve ser informado',
      'integer': 'Valor invalido informado'
    }
  }
}

module.exports = StorePedido
