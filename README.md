# Mini API RESTful - CRUD de Produtos

API RESTful desenvolvida com Node.js e Express com foco no aprendizado de back-end, integração com banco de dados SQL e compreensão do fluxo completo de uma aplicação CRUD.

## Objetivo do Projeto

O projeto foi construído com o objetivo de praticar:

- arquitetura de aplicações back-end;
- integração com banco de dados;
- operações CRUD;
- organização de rotas e controllers;
- queries SQL;
- fluxo de requisições HTTP;
- testes de rotas utilizando Thunder Client.

---

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Express
- PostgreSQL
- SQL
- Git e GitHub

---

## Funcionalidades

- Criar produtos
- Listar todos os produtos
- Buscar produto por ID
- Atualizar produtos
- Remover produtos

---

## Estrutura da Aplicação

```bash
src/
 ├── controllers
 ├── database
 └── models

router.js
server.js
```

---

## Conceitos Praticados

- APIs RESTful
- Métodos HTTP
- Rotas no Express
- Arquitetura MVC
- Integração com PostgreSQL
- Queries SQL
- Operações CRUD
- Async/Await
- Manipulação de dados
- Organização de código back-end

---

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | /products | Lista todos os produtos |
| GET | /products/:id | Busca produto por ID |
| POST | /products | Cria um produto |
| PUT | /products/:id | Atualiza um produto |
| DELETE | /products/:id | Remove um produto |

---

## Testes

As rotas foram testadas utilizando:

- Thunder Client

---

## Melhorias Futuras

- Validação de dados
- Tratamento de erros
- Autenticação com JWT
- Middlewares
- Paginação
- Docker
- Testes automatizados
- Deploy da aplicação

---

## Como Executar o Projeto

```bash
# Clonar repositório
git clone URL_DO_REPOSITORIO

# Instalar dependências
npm install

# Executar aplicação
npm run dev
```

---

Projeto desenvolvido para fins de estudo e prática em desenvolvimento back-end.