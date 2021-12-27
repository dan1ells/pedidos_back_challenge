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

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.post("/cliente", "ClienteController.store").validator('StoreCliente');
Route.get("/cliente", "ClienteController.index").middleware('auth');
Route.get("/cliente/:id", "ClienteController.show");
Route.put("/cliente/:id", "ClienteController.update").validator('StoreCliente');
Route.delete("/cliente/:id", "ClienteController.delete");

Route.post("/produto", "ProdutoController.store").middleware('auth').validator('StoreProduto');
Route.get("/produto", "ProdutoController.index");
Route.get("/produto/:id", "ProdutoController.show").middleware('auth');
Route.put("/produto/:id", "ProdutoController.update").middleware('auth').validator('StoreProduto');
Route.delete("/produto/:id", "ProdutoController.delete").middleware('auth');

Route.post("/pedido", "PedidoController.store").validator('StorePedido');
Route.get("/pedido", "PedidoController.index").middleware('auth');
Route.get("/pedido/:id", "PedidoController.show");
Route.put("/pedido/:id", "PedidoController.update");
Route.delete("/pedido/:id", "PedidoController.delete");

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
