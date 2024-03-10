import pool from "../Conection/conection.js";

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    xCoordinate FLOAT,
    yCoordinate FLOAT
  );
`;

const createTable = async () => {
  try {
    await pool.query(createTableQuery);
    const clients = [
      { name: 'Cliente 1', email: 'cliente1@email.com', phone: '111-1111', xCoordinate: -23.5505, yCoordinate: -46.6333 }, // São Paulo
      { name: 'Cliente 2', email: 'cliente2@email.com', phone: '222-2222', xCoordinate: 40.7128, yCoordinate: -74.0060 }, // Nova Iorque
      { name: 'Cliente 3', email: 'cliente3@email.com', phone: '333-3333', xCoordinate: 34.0522, yCoordinate: -118.2437 }, // Los Angeles
      { name: 'Cliente 4', email: 'cliente4@email.com', phone: '444-4444', xCoordinate: 51.5074, yCoordinate: -0.1278 },  // Londres
      { name: 'Cliente 5', email: 'cliente5@email.com', phone: '555-5555', xCoordinate: 35.6895, yCoordinate: 139.6917 }, // Tóquio
    ];
    

    for (const client of clients) {
      await pool.query(
        'INSERT INTO clients (name, email, phone, xCoordinate, yCoordinate) VALUES ($1, $2, $3, $4, $5)',
        [client.name, client.email, client.phone, client.xCoordinate, client.yCoordinate]
      );
    }
    console.log('Tabela "clients" criada com sucesso');
  } catch (error) {
    console.error('Erro ao criar a tabela "clients"', error);
  }
}



export default createTable;