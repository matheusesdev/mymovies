const MoviesController = {
  findAll(req, res) {
    res.json([
      {
        id: 1,
        name: "Homem-Aranha",
        description: "Um filme baseado em história em quadrinhos",
        category_id: 1,
        release_date: "18/04/1997",
      },
      {
        id: 2,
        name: "Homem de Ferro",
        description: "Um filme baseado em história em quadrinhos",
        category_id: 2,
        release_date: "18/04/2024",
      },
    ]);
  },
  find(req, res) {
    const { id } = req.params;
    res.json({
      id: id,
      name: "Homem-Aranha",
      description: "Um filme baseado em história em quadrinhos",
      category_id: 1,
      release_date: "18/04/1997",
    });
  },

  create(req, res) {
    const { title, description, category_id, release_date } = req.body;
    // Aqui entraria a regra de persistência do Banco de Dados.
    res.status(201).json({
      id: Number.MAX_SAFE_INTEGER,
      title,
      description,
      category_id,
      release_date,
    });
  },
  delete(req, res) {
    const { id } = req.params;
    //Aqui entra a regra para a persistência do banco de dados.
    res.status(204).json();
  },
};

module.exports = MoviesController;
