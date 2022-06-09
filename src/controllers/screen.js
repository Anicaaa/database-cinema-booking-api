const prisma = require("../utils/prisma");

const getScreens = async (req, res) => {
  const screens = await prisma.screen.findMany({});

  res.json({ data: screens });
};

const createScreen = async (req, res) => {
  try {
    const screen = await prisma.screen.create({
      data: {
        number: Number(req.body.number),
      },
    });
    res.json({ data: screen });
  } catch (e) {
    console.log(e);
    res.status(400).send("Error");
  }
};

module.exports = {
  getScreens,
  createScreen,
};
