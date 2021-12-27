'use strict'

const PedidoService = use('App/Services/PedidoService')

class PedidoController {
	constructor () {
		this._service = new PedidoService()
	}

    async store({ request }) {
		const requestBody = request.only(["data_criacao", "status", "cliente_id", "produto_id"])
		const pedido = await this._service.create(requestBody)

		return pedido
	}

	async index() {
		const pedidos = await this._service.listAll()

		return pedidos
	}

	async show({ params }) {
		const { id } = params
		const pedido = await this._service.show(id)

		return pedido
	}

	async update({ params, request, response }) {
		const { id } = params;
		const requestBody = request.only(["status"]);
		if (!requestBody.status) {
			return response
				.status(400)
				.json({ message: "O status não foi informado" });
		}
		const pedido = await this._service.update(id, requestBody)

		return pedido
	}

	async delete({ params, request, response }) {
		const requestBody = request.only(["cliente_id"]);
		if (!requestBody.cliente_id) {
			return response
				.status(400)
				.json({ message: "Informe seu id de cliente" });
		}

		const cliente_id = parseInt(requestBody.cliente_id)
		const { id } = params;
		await this._service.destroy(id, cliente_id)

		return id
	}
}

module.exports = PedidoController
