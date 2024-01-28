const db = require("../db");
const CategoryController = {
  async findAll(req, res) {
    try {
      const category = await db.query("SELECT * FROM category");
      res.json(category.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  find(req, res) {
    const { id } = req.params;
    res.json({
      id: id,
      name: "Filmes A",
      description: "Essa categoria taz filmes com a letra A.",
    });
  },

  async create(req, res) {
    const { name, description } = req.body;
    try {
      const newCategory = await db.query(
        "INSERT INTO category (name, description) VALUES  ($1, $2) RETURNIN *"[
          (name, description)
        ]
      );

      res.json(newCategory.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    res.status(201).json({
      id: Number.MAX_SAFE_INTEGER,
      name: name,
      description: description,
    });
  },
  delete(req, res) {
    const { id } = req.params;
    //Aqui entra a regra para a persistência do banco de dados.
    res.status(204).json();
  },
};

module.exports = CategoryController;
