import pg from 'pg'
const Client = pg.Client;

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "areeb@610",
    port: "5432"
})

export default client;
