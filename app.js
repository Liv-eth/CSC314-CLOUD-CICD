const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(' NAME: JEL RINKYER APPOLLOS, MATRIC NUMBER: VUG/CSC/21/5968'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
