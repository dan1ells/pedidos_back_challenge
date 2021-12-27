# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Instalaçao

Clone manualmete o repositorio e execute o comando `npm install`.

Crie um banco de dados no postgre para que a api possa armazenar informações, com o banco criado adicione um .env com base na informaçoes do .env.example e altere as informações de
acordo com os valores do banco que criado anteriormente

### Migrations

Execute o seguinte comando para rodar as migrations do sistema

```js
adonis migration:run
```

#### Executar a api

Para conseguir utilizar as funções da api execute o comando para iniciar o server `adonis serve --dev`, com isso sera possivel testar as rotas da api

recomendo a utilização do insomnia pois na pasta 'Insomnia' na raiz do projeto há um arquivo de importação das rotas para este aplicativo para importar e começar a utilizar-se 
das rotas definidas na aplicação