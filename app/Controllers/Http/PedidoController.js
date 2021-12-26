'use strict'

const Pedido = use('App/Models/Pedido')

class PedidoController {

    async store({ request, response }) {
		try {
			const requestBody = request.only(["data_criacao", "status", "cliente_id", "produto_id"]);

			if (!requestBody.data_criacao || !requestBody.status || !requestBody.cliente_id || !requestBody.produto_id) {
				return response
					.status(400)
					.json({ message: "There are missing params" });
			}

			const result = await Pedido.create(requestBody);

			response.status(201).json(result);
		} catch (error) {
			response.status(500);
		}
	}

	async index({ response }) {
		try {
			const pedidos = await Pedido.all();
			response.status(200).json(pedidos);
		} catch (error) {
			response.status(500);
		}
	}

	async show({ params, response }) {
		try {
			const { id } = params;
			const pedido = await Pedido.find(id);
			response.status(200).json(pedido);
		} catch (error) {
			response.status(500);
		}
	}

	async update({ params, request, response }) {
		try {
			const { id } = params;
			const requestBody = request.only(["status"]);

			if (!requestBody.status) {
				return response
					.status(400)
					.json({ message: "There are missing params" });
			}

			const pedido = await Pedido.findByOrFail("id", id);

			pedido.status = requestBody.status;

			await pedido.save();

			response.status(200).json(pedido);
		} catch (error) {
			response.status(500);
		}
	}

	async delete({ params, response }) {
		try {
			const { id } = params;

			const pedido = await Pedido.findByOrFail("id", id);

			await pedido.delete();

			response.status(200).json({});
		} catch (error) {
			response.status(500);
		}
	}
}

module.exports = PedidoController
