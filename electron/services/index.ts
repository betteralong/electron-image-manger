
// import { DataSource } from "typeorm";
// import { Photo } from "./photo/entity";

// const appDataSource = new DataSource({
//     type: "sqlite",
//     database: "test",
//     entities: [Photo],
//     synchronize: true,
//     logging: true
// })


// export  const iniDb = function() {
//     return appDataSource.initialize().then((db) => {
//         console.log("Data Source has been initialized!")
//         return db
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })
// }


import sqlite3 from 'sqlite3'

export  const iniDb = function() {
    const db = new sqlite3.Database('test')
}