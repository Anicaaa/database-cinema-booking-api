const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.disable("x-powered-by");

// Add middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tell express to use your routers here
const customerRouter = require("./routers/customer");
const moviesRouter = require("./routers/movies");
const screenRouter = require("./routers/screen");
const ticketRouter = require("./routers/ticket");

app.use("/customer", customerRouter);
app.use("/movies", moviesRouter);
app.use("/screen", screenRouter);
app.use("/ticket", ticketRouter);

module.exports = app;
