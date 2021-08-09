console.log("process.env.PORT",process.env.PORT);
console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
module.exports={
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  //"ssl": {rejectUnauthorized: false }, 
    "entities": [
     "./dist/models/*.js"
  ],
  "migrations": [
     "./dist/database/migrations/*.js"
  ],
"cli":{
  "entitiesDir": "./src/models/*",
  "migrationsDir":"./src/database/migrations/"
  }
}