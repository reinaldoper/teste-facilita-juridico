# Facilita Jurídico - Aplicação de Otimização de Rotas
## Esta aplicação visa otimizar rotas para clientes em um contexto jurídico. Utiliza um backend em Node.js com PostgreSQL como banco de dados.

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

#### O DDL da tabela do banco de dados se encontra:
- src/db/createTableQuery.js


