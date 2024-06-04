const express = require("express");
const app = express();
const userRoutes = require("./entities/user.routes");
const PORT = 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
