const prisma = require("../utils/prisma");

const getMovies = async (req, res) => {
  const movies = await prisma.movie.findMany({
    include: {
      screenings: true,
    },
  });

  res.json({ data: movies });
};

module.exports = {
  getMovies,
};
