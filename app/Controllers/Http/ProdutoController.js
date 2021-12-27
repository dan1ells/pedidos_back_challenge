'use strict'

const ProdutoService = use('App/Services/ProdutoService')

class ProdutoController {
	constructor () {
		this._service = new ProdutoService()
	}	

    async store({ request}) {
		const requestBody = request.only(["nome", "preco"])
		const produto = await this._service.create(requestBody)

		return produto
	}

	async index() {
		const produtos = await this._service.listAll();
		
		return produtos
	}

	async show({ params }) {
		const { id } = params;
		const produto = await this._service.show(id);

		return produto
	}

	async update({ params, request, response }) {
		const { id } = params;
		const requestBody = request.only(["nome", "preco"]);

		const produto = await this._service.update(id, requestBody)

		return produto
	}

	async delete({ params, response }) {
		const { id } = params;
		await this._service.destroy(id)

		return id
	}
}

module.exports = ProdutoController
