'use strict'

const Cliente = use('App/Models/Cliente')

class ClienteController {

    async store({ request, response }) {
		try {
			const requestBody = request.only(["nome", "email", "telefone", "endereco"]);

			if (!requestBody.nome || !requestBody.email || !requestBody.telefone || !requestBody.endereco) {
				return response
					.status(400)
					.json({ message: "There are missing params" });
			}

			const result = await Cliente.create(requestBody);

			response.status(201).json(result);
		} catch (error) {
			response.status(500).json({message: "Nao foi possivel cadastrar: ", error});
		}
	}

	async index({ response }) {
		try {
			const clientes = await Cliente.all();
			response.status(200).json(clientes);
		} catch (error) {
			response.status(500);
		}
	}

	async show({ params, response }) {
		try {
			const { id } = params;
			const cliente = await Cliente.find(id);
			response.status(200).json(cliente);
		} catch (error) {
			response.status(500);
		}
	}

	async update({ params, request, response }) {
		try {
			const { id } = params;
			const requestBody = request.only(["nome", "email", "telefone", "endereco"]);

			if (!requestBody.nome || !requestBody.email) {
				return response
					.status(400)
					.json({ message: "There are missing params" });
			}

			const cliente = await Cliente.findByOrFail("id", id);

			cliente.nome = requestBody.nome;
			cliente.email = requestBody.email;
            cliente.telefone = requestBody.telefone;
            cliente.endereco = requestBody.endereco

			await cliente.save();

			response.status(200).json(cliente);
		} catch (error) {
			response.status(500);
		}
	}

	async delete({ params, response }) {
		try {
			const { id } = params;

			const cliente = await Cliente.findByOrFail("id", id);

			await cliente.delete();

			response.status(200).json({});
		} catch (error) {
			response.status(500);
		}
	}
}

module.exports = ClienteController
