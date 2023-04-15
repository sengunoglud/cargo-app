const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Set the logging level
  format: winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to the log message
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`), // Format the log message
  ),
  transports: [
    // Configure the console transport for logging to the console
    new winston.transports.Console({
      level: 'info', // Set the logging level for the console transport
    }),
    // Configure a file transport for logging to a file
    new winston.transports.File({
      filename: 'logs/error.log', // Set the filename for the log file
      level: 'error', // Set the logging level for the file transport
    }),
  ],
});

// Export the logger instance
module.exports = logger;
