const path = require("path");

const outputPath = path.resolve(__dirname, "dirst");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath,
  },
};
