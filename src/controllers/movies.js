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

const movieID = async (req, res) => {
  const id = Number(req.params.id);
  const movie = await prisma.movie.findUnique({
    where: {
      id: id,
    },
  });
  if (!movie) {
    return res.status(404).json({ error: `sorry movie id: ${id} not found` });
  }
  res.json({ data: movie });
};

module.exports = {
  getMovies,
  createMovie,
  movieID,
};
