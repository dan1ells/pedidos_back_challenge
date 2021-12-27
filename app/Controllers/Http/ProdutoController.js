'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController {

    async store({ request, response }) {
		try {
			const requestBody = request.only(["nome", "preco"]);
			const result = await Produto.create(requestBody);

			response.status(201).json(result);
		} catch (error) {
			response.status(500);
		}
	}

	async index({ response }) {
		try {
			const produtos = await Produto.all();
			response.status(200).json(produtos);
		} catch (error) {
			response.status(500);
		}
	}

	async show({ params, response }) {
		try {
			const { id } = params;
			const produto = await Produto.find(id);
			response.status(200).json(produto);
		} catch (error) {
			response.status(500);
		}
	}

	async update({ params, request, response }) {
		try {
			const { id } = params;
			const requestBody = request.only(["nome", "preco"]);

			const produto = await Produto.findByOrFail("id", id);

			produto.nome = requestBody.nome;
			produto.preco = requestBody.preco;

			await produto.save();

			response.status(200).json(produto);
		} catch (error) {
			response.status(500);
		}
	}

	async delete({ params, response }) {
		try {
			const { id } = params;

			const produto = await Produto.findByOrFail("id", id);

			await produto.delete();

			response.status(200).json({});
		} catch (error) {
			response.status(500);
		}
	}
}

module.exports = ProdutoController
