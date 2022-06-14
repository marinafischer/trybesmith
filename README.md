# Sobre o projeto Trybesmith!

Projeto feito durante o curso de desenvolvimento web da Trybe
Construção de um API utilizando Node.js, Express, TypeScript, banco de dados MySQL, biblioteca para validação Joi, biblioteca para criação e verificação de token JWT;
API construida seguindo para realizar CRUD(Create, Read, Update, Delete) seguindo o padrão REST API;

Camadas da aplicação: Model, Service e Controller;

## Para começar:

- Clone o repositório: git@github.com:marinafischer/trybesmith.git

- Para iniciar com node:
  - Instale as dependencias: npm install
  - Crie um aquivo .env na raiz do projeto com as variáveis esperadas pela connection;
  - Crie o banco de dados (Trybesmith.sql)
  - Inicie a aplicação: npm start

- Para iniciar com docker:
  - Rode o comando: docker-compose up -d
  - Rode o comando: docker exec -it trybesmith bash
    Esse comando dará acesso ao terminal do container, a partir daqui é possível rodar os mesmos comandos usados com o node (descritos acima);

# Endpoints:

## GET`/products`
- O endpoint consulta o banco de dados;
- Retorna o status 200 e todos os produtos do banco;

## POST `/products`
- O endpoint cadastra um novo produto;
- O endpoint deve receber a seguinte estrutura:

```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```
- Caso algum dado não seja informado, a API retorna o status 400 e uma mensagem de erro;
- Se o cadastro ocorrer com sucesso, a API retorna o status 201 e os dados do produto;

## POST `/users`;
- O endpoint cadastra um novo usuário;
- O endpoint deve receber a seguinte estrutura:
```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```
- Caso algum dado não seja informado, a API retorna o status 400 e uma mensagem de erro;
- Se o cadastro ocorrer com sucesso, a API retorna o status 201 e um token de acesso;

## GET `/orders`.
- O endpoint consulta o banco de dados;
- A rota retorna o status 200 e os pedidos e os `id`s dos produtos associados a estes.

## POST `/login`
- A rota recebe os campos `username` e `password`, e esses campos são validados no banco de dados;
- Um token `JWT` é gerado e retornado caso haja sucesso; 
- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```
- Caso os dados estejam incorretos, a API retorna o status 400 e uma mensagem de erro;

## 6 - POST `/orders`
- O endpoint cadastra um novo pedido;
- O pedido só será criado caso a pessoa usuária esteja logada(enviar o token pelo cabeçalho da requisição usando a chave Authorization);
- Os pedidos enviados são salvos na tabela `Orders` e a tabela `Products` é atualizada em todos os produtos com os `id` incluídos na chave `productsIds` da requisição, e adicionando nesses produtos o `orderId` do pedido recém criado;
- O endpoint deve receber a seguinte estrutura:
```json
  {
    "productsIds": [1, 2]
  }
```
- Caso os dados do token ou do json estejam incorretos, a API retorna o status 400 e uma mensagem de erro;