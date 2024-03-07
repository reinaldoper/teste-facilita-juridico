import ControllerClients from "../Controller/ClientsController.js";
import express from "express";

const router = express.Router();

const client = new ControllerClients();


router.post('/api/clients', client.createClient);

router.get('/api', client.getClients);

router.get('/api/optimize-route', client.getClientsOptimized);


export default router;