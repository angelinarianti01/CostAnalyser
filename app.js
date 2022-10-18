const express = require('express');
const config = require('config');

const app = express();

// Middleware: Body parser
app.use(express.json());

// Routes
app.use('/', require('./routes/source'));
app.use('/mutants/', require('./routes/mutants'));

// Port
const PORT = config.get('PORT') || 80;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
