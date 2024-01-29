# Projeto de API de Filmes

Este projeto é uma API para gerenciar filmes e categorias.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL

## Rotas

### Filmes

- `GET /movies`: Retorna todos os filmes.
- `GET /movies/:id`: Retorna um filme específico pelo ID.
- `POST /movies`: Cria um novo filme.
- `PUT /movies/:id`: Atualiza um filme existente pelo ID.
- `DELETE /movies/:id`: Deleta um filme pelo ID.

### Categorias

- `GET /category`: Retorna todas as categorias.
- `GET /category/:id`: Retorna uma categoria específica pelo ID.
- `POST /category`: Cria uma nova categoria.
- `PUT /category/:id`: Atualiza uma categoria existente pelo ID.
- `DELETE /category/:id`: Deleta uma categoria pelo ID.

## Como Executar

1. Clone este repositório.
2. Instale as dependências com `npm install`.
3. Configure o banco de dados PostgreSQL.
4. Inicie o servidor com `npm start`.

# Estrutura do Projeto:

```
- src
   - controllers
      - MovieController.js
      - CategoryController.js
   - routes
      - movies.js
      - category.js
   - db
      . index.js

- index.js
- package.json
- package-lock.json
- .env
- .env.example
- .gitignore
- readme.md
```

# Schema DB

```
CREATE TABLE category(
id  SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description VARCHAR(255),

);
```

```
CREATE TABLE movie(
   id SERIAL PRIMARY KEY,
   category_id INTEGER REFERENCES category(id) ON DELETE CASCADE,
   title VARCHAR(255) NOT NULL,
   description VARCHAR(255),
   release_date VARCHAR (255)

);
```
