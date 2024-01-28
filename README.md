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
