const express = require('express');
const config = require('./config');
const { default: serverRender } = require('./serverRender');


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const initalContent = serverRender()
    res.render('index', { initalContent });
})

app.listen(config.port, () => console.info(`listering on PORT : ${config.port}`));

