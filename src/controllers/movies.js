const prisma = require("../utils/prisma");

const getMovies = async (req, res) => {
  const movies = await prisma.movie.findMany({
    include: {
      screenings: true,
    },
  });

  res.json({ data: movies });
};

const createMovie = async (req, res) => {
  const movie = await prisma.movie.create({
    data: {
      title: req.body.title,
      runtimeMins: Number(req.body.runtimeMins),
    },
  });
  res.json({ data: movie });
};

module.exports = {
  getMovies,
  createMovie,
};
