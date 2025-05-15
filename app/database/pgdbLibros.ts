import { Client } from 'pg'

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'Adonis_Taller'
})

client.connect();
export default client;