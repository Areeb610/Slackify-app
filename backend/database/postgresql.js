import pg from 'pg'
const Client = pg.Client;

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "new_database",
    password: "admin",
    port: "5432"
})

export default client;
