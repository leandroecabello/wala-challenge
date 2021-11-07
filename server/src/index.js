const connection = require("./db");
const app = require("./app");

connection();

app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
