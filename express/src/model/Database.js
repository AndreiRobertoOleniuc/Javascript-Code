import mysql from "mysql2";

class DB {
  constructor() {
    this.connection = this.init();
  }
  init() {
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "expressrestapi",
    });
  }
  async getAllUser() {
    return await new Promise((resolve, reject) => {
      this.connection.query("select * from user", (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  } 
  async getUser(name) {
    return await new Promise((resolve, reject) => {
      this.connection.query(
        `select * from user where name = "${name}"`,
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
  async postUser(user) {
    return await new Promise((resolve, reject) => {
      try {
        this.connection.query(
          `insert into user (name,age,email,password) values 
          ("${user.name}",${user.age},"${user.email}","${user.password}");`
        );
        resolve("Ok");
      } catch (error) {
        console.log(error);
        reject("Failed");
      }
    });
  }
  async deleteUser(user) {
    return await new Promise((resolve, reject) => {
      try {
        this.connection.query(`delete from user where 
        name = "${user.name}" and age = ${user.age} 
        and email = "${user.email}" and password = "${user.password}" `);
        resolve("Ok");
      } catch (error) {
        console.log(error);
        reject("Failed");
      }
    });
  }
}

export default DB;
