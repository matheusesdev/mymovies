const CategoryController = {
  findAll(req, res) {
    res.json([
      {
        id: 1,
        name: "Filmes A",
        description: "Essa categoria taz filmes com a letra A.",
      },
      {
        id: 2,
        name: "Filmes B",
        description: "Essa categoria taz filmes com a letra A.",
      },
    ]);
  },
  find(req, res) {
    const { id } = req.params;
    res.json({
      id: id,
      name: "Filmes A",
      description: "Essa categoria taz filmes com a letra A.",
    });
  },

  create(req, res) {
    const { name, description } = req.body;
    // Aqui entraria a regra de persistência do Banco de Dados.
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
