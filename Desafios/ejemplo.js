 const fs = require("fs");

class ManagerUser {
  constructor(filename) {
    (this.filename = filename), (this.format = "utf-8");
  }

  createUser = async (name, lastname, age, course) => {
    const user = {
      name,
      lastname,
      age,
      course,
    };

    const list = await this.getUsers(); //se obtiene la lista de usuarios

    list.push(user); //se poushea el nuevo usuario a la lista de usuarios

    await fs.promises.writeFile(this.filename, JSON.stringify(list)); //se escribe o sobreescribe el archivo existente
  };

  getUsers = async () => {
    try {
      //Leer el archivo
      const data = await fs.promises.readFile(this.filename, this.format);
      const dataObj = JSON.parse(data);

      return dataObj;
    } catch (err) {
      //Sino existe el archivo
      console.log(`Error: ${err}`);
      return [];
    }
  };
}

run = async() => {
    const manager = new ManagerUser("users.json")
    await manager.createUser("R2", "Verbel", 23, "Frontend")

    console.log(await manager.getUsers());
};

run() 

//USANDO MODULO CRYPTO QUE VIENE DE BASE EN NODE
/*
const fs = require("fs");
const crypto = require("crypto")

class ManagerUser {
  constructor(filename) {
    (this.filename = filename), (this.format = "utf-8");
  }

  createUser = async (name, lastname, age, password) => {
    const user = {
      name,
      lastname,
      age,
    };

    user.salt = crypto.randomBytes(128).toString("base64")
    user.password = crypto.createHmac("sha256", user.salt).update(password).digest("hex")

    const list = await this.getUsers(); //se obtiene la lista de usuarios

    list.push(user); //se poushea el nuevo usuario a la lista de usuarios

    await fs.promises.writeFile(this.filename, JSON.stringify(list)); //se escribe o sobreescribe el archivo existente
  };

  getUsers = async () => {
    try {
      //Leer el archivo
      const data = await fs.promises.readFile(this.filename, this.format);
      const dataObj = JSON.parse(data);

      return dataObj;
    } catch (err) {
      //Sino existe el archivo
      console.log(`Error: ${err}`);
      return [];
    }
  };
}

run = async() => {
    const manager = new ManagerUser("users.json")
    await manager.createUser("R2", "Verbel", 23, "Frontend")

    console.log(await manager.getUsers());
};

run() */