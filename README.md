# About the Trybesmith project!

Project made during Trybe web development course.

It is an application built with Node.js, Express, TypeScript, MySQL database, library for Joi validation, library for creation and verification of JWT token.

The API follows the REST API standard and with it it is possible to perform CRUD (Create, Read, Update, Delete) in a database that simulates a store.

Application layers: Model, Service and Controller;

## To get start:

- Clone the repository: git@github.com:marinafischer/trybesmith.git

- To start with node:
  - Install dependencies: npm install
  - Create a .env file in the project root with the variables expected by the connection;
  - Create the database (Trybesmith.sql)
  - Start the application: npm start

- To start with docker:
  - Run the command: docker-compose up -d
  - Run the command: docker exec -it trybesmith bash
    This command will give access to the container terminal, from here it is possible to run the same commands used with node (described above);

# Endpoints:

## GET`/products`
- The endpoint queries the database;
- Returns status 200 and all bank products;

## POST `/products`
- The endpoint registers a new product;
- The endpoint must receive the following structure:

```json
  {
    "name": "Longsword",
    "amount": "30 gold pieces"
  }
```
- If any data is not informed, the API returns status 400 and an error message;
- If the registration is successful, the API returns status 201 and product data;

## POST `/users`;
- The endpoint registers a new user;
- The endpoint must receive the following structure:
```json
{
  "username": "string",
  "class": "string",
  "level": 1,
  "password": "string"
}
```
- If any data is not informed, the API returns status 400 and an error message;
- If the registration is successful, the API returns status 201 and an access token;

## GET `/orders`.
- The endpoint queries the database;
- The route returns status 200 and the orders and product `id`s associated with them.

## POST `/login`
- The route receives the `username` and `password` fields, and these fields are validated in the database;
- A `JWT` token is generated and returned if successful;
- The endpoint must receive the following structure:
```json
  {
    "username": "string",
    "password": "string"
  }
```
- If the data is incorrect, the API returns status 400 and an error message;

## 6 - POST `/orders`
- The endpoint registers a new request;
- The request will only be created if the user is logged in (send the token through the request header using the Authorization key);
- The orders sent are saved in the `Orders` table and the `Products` table is updated in all products with the `id` included in the `productsIds` key of the requisition, and adding in these products the `orderId` of the newly created order;
- The endpoint must receive the following structure:
```json
  {
    "productsIds": [1, 2]
  }
```
- If the token or json data is incorrect, the API returns status 400 and an error message;
