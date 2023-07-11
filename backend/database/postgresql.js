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

// const connectpost = async () => {
//     try {
//         const client = new Client({
//             user: process.env.PGUSER,
//             host: process.env.PGHOST,
//             database: process.env.PGDATABASE,
//             password: process.env.PGPASSWORD,
//             port: process.env.PGPORT
//         })
//         await client.connect((err) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log("PostgreSQL Connected");
//             }
//         })
//     } catch (err) {
//         console.log(err)
//     }
// };
