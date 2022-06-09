const prisma = require("../utils/prisma");

const createTicket = async (req, res) => {
  const ticket = await prisma.ticket.create({
    data: {
      id: Number(req.body.id),
      number: Number(req.body.number),
      price: Number(req.body.price),
    },
  });
  res.json({ data: ticket });
};

module.exports = {
  createTicket,
};
