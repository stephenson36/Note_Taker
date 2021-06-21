const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
})