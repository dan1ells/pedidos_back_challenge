'use strict'

const ClienteService = use('App/Services/ClienteService')

class ClienteController {
	constructor () {
		this._service = new ClienteService()
	}

    async store({ request}) {
		const requestBody = request.only(["nome", "email", "telefone", "endereco"])
		const cliente = await this._service.create(requestBody)

		return cliente
	}

	async index() {
		const clientes = await this._service.listAll()

		return clientes
	}

	async show({ params }) {
		const { id } = params;
		const cliente = await this._service.show(id)

		return cliente
	}

	async update({ params, request, response }) {
		const { id } = params;
		const requestBody = request.only(["nome", "email", "telefone", "endereco"]);

		const cliente = await this._service.update(id, requestBody)

		return cliente
	}

	async delete({ params, response }) {
		const { id } = params

		await this._service.destroy(id)

		return id
	}
}

module.exports = ClienteController
