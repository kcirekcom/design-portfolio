'use strict';

const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

dotenv.load();

const PORT = process.env.PORT;
const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});