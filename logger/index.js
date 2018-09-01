/*eslint no-console: ["error", { allow: ["info", "error"] }] */
// # Logger
// * Used for logging (for development)
require(`dotenv`).config();
require(`colors`);
const devMode = process.env.SERVER_MODE === `development`;

module.exports = (...args) => {
  if(devMode) console.info(...args);
};