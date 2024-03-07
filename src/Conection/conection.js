import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'clients',
  password: 'root',
  port: 5432,
});

export default pool;