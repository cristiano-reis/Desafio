module.exports={
  "type": "postgres",
  "url": process.env.DATABASE_URL,
    "entities": [
     "./src/models/*.ts"
  ],
  "migrations": [
     "./src/database/migrations/*.ts"
  ],
"cli":{
  "entitiesDir": "./src/models/*",
  "migrationsDir":"./src/database/migrations/"
  }
}