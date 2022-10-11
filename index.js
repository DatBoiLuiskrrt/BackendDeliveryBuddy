require("dotenv").config();
const PORT = process.env.PORT;
const server = require("./api/server");

server.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`);
});
