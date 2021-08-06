module.exports={
  "type": "postgres",
  "url": process.env.DATABASE_URL,
    "entities": [
     "./src/models/*.js"
  ],
  "migrations": [
     "./src/database/migrations/*.js"
  ],
"cli":{
  "entitiesDir": "./src/models/*",
  "migrationsDir":"./src/database/migrations/"
  }
}