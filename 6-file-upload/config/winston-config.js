const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // skip logging debug messages
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.log' }),
  ],
});

module.exports = logger;
