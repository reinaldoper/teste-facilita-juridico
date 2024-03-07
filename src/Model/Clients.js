import cli from "@angular/cli";
import pool from "../Conection/conection.js";

class Clients {
  constructor() { }

  createClient = async (client) => {
    const { name, email, phone, xCoordinate, yCoordinate } = client;
    try {
      await pool.query(
        'INSERT INTO clients (name, email, phone, xCoordinate, yCoordinate) VALUES ($1, $2, $3, $4, $5)',
        [name, email, phone, xCoordinate, yCoordinate]
      );
      return 'Cliente cadastrado com sucesso';
    } catch (error) {
      console.error(error);
      return 'Erro ao cadastrar cliente';
    }
  }

  getClients = async () => {
    const result = await pool.query('SELECT * FROM clients ORDER BY xCoordinate, yCoordinate');
    return result.rows;
  }

  optimizeClient = async () => {
    try {
      const result = await pool.query('SELECT * FROM clients ORDER BY xCoordinate, yCoordinate');

      const routOptimized = this.optimizeRoute(result.rows);

      return routOptimized;
    } catch (error) {
      console.error(error);
      return 'Erro ao otimizar a rota';
    }
  }

  //função para otimizar as coordenadas, baseado no força bruta
  optimizeRoute = (clients) => {
    if (!Array.isArray(clients) || clients.length === 0) {
      console.error('Invalid clients array:', clients);
      return [];
    }
  
    const distance = (point1, point2) => {
      if (!point1 || !point2) {
        return Infinity;
      }
  
      const { xcoordinate: x1, ycoordinate: y1 } = point1;
      const { xcoordinate: x2, ycoordinate: y2 } = point2;
  
      if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        console.log('Invalid coordinates:', point1, point2);
        return Infinity;
      }
  
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
  
    const buildRoute = () => {
      const route = [0];
      let remainingPoints = [...clients];
  
      while (remainingPoints.length > 1) {
        const lastIndex = route[route.length - 1];
        let nearestIndex = -1;
        let nearestDistance = Infinity;
  
        for (let i = 0; i < remainingPoints.length; i++) {
          const currentDistance = distance(clients[lastIndex], remainingPoints[i]);
          if (currentDistance < nearestDistance && i !== lastIndex && route.indexOf(i) === -1) {
            nearestDistance = currentDistance;
            nearestIndex = i;
          }
        }
  
        if (nearestIndex !== -1) {
          route.push(nearestIndex);
        } else {
          break;
        }
      }
  
      return route.map((index) => remainingPoints[index]);
    }
  
    const optimizedRoute = buildRoute();
    return optimizedRoute;
  }

  

}

export default Clients;