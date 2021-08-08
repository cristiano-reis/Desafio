module.exports={
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "ssl": {rejectUnauthorized: false }, 
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