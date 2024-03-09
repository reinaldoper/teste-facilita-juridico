import Clients from "../Model/Clients.js";
import { Status } from "../Status.js";
import ClientDto from '../ClientDto/ClientDto.js'

class ControllerClients extends ClientDto {
  client = new Clients()
  constructor() {
    super()
  }

  getClientsOptimized = async (req, res) => {
    try {
      const client = await this.client.optimizeClient();
      return res.status(Status.OK).json({ message: client });
    } catch (error) {
      return res.status(Status.ERROR_SERVER).json({ error: 'Internal server error' });
    }
  }

  createClient = async (req, res) => {
    try {
      const client = await this.client.createClient(req.body);
      return res.status(Status.OK).json({ message: client });
    } catch (error) {
      return res.status(Status.ERROR_SERVER).json({ error: 'Internal server error' });
    }
  }

  getClients = async (req, res) => {
    try {
      const client = await this.client.getClients();
      return res.status(Status.OK).json({ message: client });
    } catch (error) {
      return res.status(Status.ERROR_SERVER).json({ error: 'Internal server error' });
    }
  }

}

export default ControllerClients;