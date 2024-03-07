import pool from "../Conection/conection.js";

const drop = `DROP TABLE IF EXISTS clients;`;

const dropTable = async () => {
  try {
    await pool.query(drop);
    console.log('DROP TABLE: Operation completed successfully');
  } catch (error) {
    console.error('DROP TABLE: Error encountered', error);
  }
};
dropTable();

export default dropTable;
