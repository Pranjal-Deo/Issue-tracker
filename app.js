const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb+srv://Pranjal:pd04@cluster0.ouspxxw.mongodb.net/issueTrackerDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const indexRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const issueRoutes = require('./routes/issues');

app.use('/', indexRoutes);
app.use('/projects', projectRoutes);
app.use('/issues', issueRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
