# Facilita Jurídico - Aplicação de Otimização de Rotas
## Esta aplicação visa otimizar rotas para clientes em um contexto jurídico. Utiliza um backend em Node.js com PostgreSQL como banco de dados.

### Versões da aplicação a serem utilizadas.
- "cors": "^2.8.5",
- "express": "^4.18.3",
- "nodemon": "^3.1.0",
- "pg": "^8.11.3"
- "node": "v16.14.2"

## Instalação
- Clone o repositório:
- cd teste-facilita-juridico
- npm install
## Configure o banco de dados PostgreSQL através do docker:

```shell
docker-compose up -d
```

## Crie um banco de dados e atualize as configurações.
```shell
npm run db:create
```


## Inicie o servidor:

```shell
npm start
```
## Comando para dropar a tabela clients.
```shell
npm run db:drop
```
- POST localhost/api/clients: Adiciona um novo cliente.
- GET localhost/api/optimize-route: Otimiza a rota dos clientes (TSP).
- GET localhost/api/: Lista os clientes cadastrados.

#### O DDL da tabela do banco de dados se encontra:
- src/db/createTableQuery.js


