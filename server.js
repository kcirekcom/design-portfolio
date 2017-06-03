'use strict';

const express = require('express');

const PORT = 8081;
const app = express();

app.use(express.static(`${__dirname}/build`));

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});