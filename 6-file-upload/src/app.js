const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { port, nodeEnv } = require('../config/index');
const logger = require('../config/winston-config');

const app = express();
dotenv.config();
app.use(express.static(path.join(__dirname, 'public')));
app
  .route('/')
  .get((_, res) => {
    res.send('Go to /image for image upload');
  })
  .all((req, res) => res.status(405).json({ error: `Method ${req.method} not allowed` }));

// Routes
const imageRouter = require('./routes/image-routes');

app.use('/image', imageRouter);

app.listen(port, () => logger.info(`Server is listening on ${port} in ${nodeEnv}`));
