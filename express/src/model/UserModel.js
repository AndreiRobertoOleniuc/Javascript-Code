import DB from "./Database.js";

export const getAllUser = async () => {
  const database = new DB();
  const allUsers = await database.getAllUser();
  return allUsers;
};

export const getUser = async (name) => {
  const database = new DB();
  return await database.getUser(name);
};

export const postUser = async (user) => {
  const database = new DB();
  return await database.postUser(user);
};

export const deleteUser = async (user) => {
  const database = new DB();
  return await database.deleteUser(user);
};
