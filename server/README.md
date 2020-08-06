## API RESTful

Diferente do Padrão MVC (Model / View / Controller) que utiliza um Template Engine, que é uma forma da gente conseguir retornar HTML do back-end, tornando nossas respostas pelo lado do servidor mais pesadas, utilizaremos a estrutra REST.
<br/>
Possibilitando assim, toda requisição que é feita ao back-end, ao invés de retornar o HTML da página já com os dados, será retornado os dados em formato JSON para o front-end, o que por consequência deixa requisições que são feitas aos back-end mais performáticas.

Além de que essa estruta consegue deixar nosssa aplicação mais flexível, podendo ter 1 back-end para 2 ou mais front-end, como por exemplo uma aplicação web e mobile.

## Configurações iniciais

  - Iniciando com `yarn init -y`
  - Instalando o Typescript: `yarn add typescript -D`
  - Criando arquivo tsconfig.json: `yarn tsc --init`
  - Alterar target do aquivo tsconfig para `es2017`
  - Instalando ts-node-dev: `yarn add ts-node-dev -D`

## Rotas e Recursos

- Rota:
  É o endereço completo da aplicação

- Recurso: 
  Qual entidade estamos acessando do sistema

## Métodos HTTP

- GET: Buscar uma ou mais informações do back-end
- POST: Criar uma nova informação no back-end
- PUT: Atualizar uma informação existente no back-end
- DELETE: Removar uma informação no back-end

Os métodos HTTP são muito semânticos, por exemplo

`POST http://localhost:3333/users` = Criar um usuário
`GET http://localhost:3333/users` = Listar os usuários
`GET http://localhost:3333/users/5` = Buscar dados do usuário com ID = 5

## Tipos de parâmetros

- Request Body: Parâmetros para criação/atualização de informação

  Exemplo de Rota utilizando o **Request Body**:

```ts
app.post('/users', (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email
  }

  return response.json(user);
});
```

- Route Params: São parâmetros que vem na própria rota que identificam um recurso. Tem como objetivo principal identificar qual recurso eu quero atualizar ou deletar.
  `http://localhost:3333/users/2` o 2 após o /users seria o request param

Exemplo de Rota Utilizando o **Route Params**:

```ts
app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user)
});
```

- Query Param: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação e afins
  `http://localhost:3333/users?search=on`

Exemplo de Rota utilizando **Query Param**:

```ts
app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.send(filteredUsers);
});
```

## Funcioanlidades

### Conexões

- Rota para listar o total de conexões realizadas
- Rota para criar uma nova conexão
  
### Aulas

- Rota para criar uma aula
- Rota para listar Aulas
  - Filtrar por, dia da semana e horário


## Conexão com o banco de dados

  - Instalando o Knex.js e sqlite: `yarn add knex sqlite3`
  - Criando conexão no arquivo `connection.ts`

## Migrations

As migrations controlam a versão do nosso banco de dados.



Para criar as migrations utilizando o KnexJs, vamos criar um arquivo `knexfile.ts` e passar as seguintes configurações, porém estamos utilizando typescript na nossa aplicação, e infelizmente o knex só entende javascript, tendo isso em mente, nossa configuração tem que ser feita usando javascript vanilla.

```js
'configurações do knexfile.ts aqui'
```

Vamos agora sobrescrever algumas opções do knexjs para fazer ele reconhecer o typescript.

No arquivo `package.json`, crie um novo script chamado `knex:migrate`, e atribua a ele a seguinte configuração

```json
"knex:migrate": "knex --knexfile knexfile.ts migrate:latest"
```