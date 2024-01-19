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
};

module.exports = CategoryController;
