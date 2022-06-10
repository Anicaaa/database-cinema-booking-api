const prisma = require("../utils/prisma");

const createTicket = async (req, res) => {
  const ticket = await prisma.ticket.create({
    data: {
      customerId: Number(req.body.customerId),
      screeningId: Number(req.body.screeningId),
    },
  });
  res.json({ data: ticket });
};

module.exports = {
  createTicket,
};
