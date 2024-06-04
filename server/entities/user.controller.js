const users = require("./user.model");

const getUsers = (req, res) => {
  if (users) {
    res.json(users);
  } else {
    res.status(404).send("Пользователи не найдены");
  }
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Пользователь не найден");
  }
};

const createUser = (req, res) => {
  const { id, name, email, age } = req.body;
  if (!id || !name || !email || !age) {
    return res.status(400).send("Заполните все поля");
  }
  const userExists = users.some((u) => u.id === id);
  if (userExists) {
    return res.status(400).send("Пользователь с таким id уже существует");
  }
  const newUser = { id, name, email, age };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email, age } = req.body;
  const user = users.find((u) => u.id === userId);
  if (user) {
    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;
    res.json(user);
  } else {
    res.status(404).send("Пользователь не найден");
  }
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Пользователь не найден");
  }
};

const getUsersByAge = (req, res) => {
  const age = parseInt(req.params.age);
  const filteredUsers = users.filter((user) => user.age > age);
  if (filteredUsers.length > 0) {
    res.status(200).json(filteredUsers);
  } else {
    res.status(404).send(`Пользователей старше ${age} лет не найдено`);
  }
};

const getUsersByDomain = (req, res) => {
  const domain = req.params.domain;
  const filteredUsers = users.filter((user) =>
    user.email.endsWith(`@${domain}`)
  );
  if (filteredUsers.length > 0) {
    res.status(200).json(filteredUsers);
  } else {
    res.status(404).send(`Пользователей с доменом ${domain} не найдено`);
  }
};

const getUsersSorted = (req, res) => {
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  res.status(200).json(sortedUsers);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUsersByAge,
  getUsersByDomain,
  getUsersSorted,
};
