'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post("/cliente", "ClienteController.store");
Route.get("/cliente", "ClienteController.index");
Route.get("/cliente/:id", "ClienteController.show");
Route.put("/cliente/:id", "ClienteController.update");
Route.delete("/cliente/:id", "ClienteController.delete");

Route.post("/produto", "ProdutoController.store");
Route.get("/produto", "ProdutoController.index");
Route.get("/produto/:id", "ProdutoController.show");
Route.put("/produto/:id", "ProdutoController.update");
Route.delete("/produto/:id", "ProdutoController.delete");

Route.post("/pedido", "PedidoController.store");
Route.get("/pedido", "PedidoController.index");
Route.get("/pedido/:id", "PedidoController.show");
Route.put("/pedido/:id", "PedidoController.update");
Route.delete("/pedido/:id", "PedidoController.delete");

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
