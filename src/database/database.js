import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
  #database = {}
//constroe o banco de dados
  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then(data => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }


  //insere as tabelas no banco de dados
  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }
    this.#persist()

  }
}