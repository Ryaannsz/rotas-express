# 📇 API de Cadastro de Contatos (MongoDB)
Este é o backend da aplicação de cadastro de contatos, desenvolvido com Node.js, Express, Mongoose e MongoDB. Utiliza autenticação com JWT e armazenamento seguro de variáveis com dotenv.

# 🚀 Tecnologias Utilizadas
🧩 Node.js

⚙️ Express

🍃 MongoDB

🧬 Mongoose

🔐 JWT (JSON Web Token)

⚙️ dotenv

# ⚙️ Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```
DATABASE_URL=mongodb://localhost:27017/seu-banco
JWT_SECRET=sua-chave-secreta
```

# 📦 Instalação
```
git clone https://github.com/seu-usuario/backend-mongo-contato.git
cd backend-mongo-contato
npm install
```
# ▶️ Executando o Projeto
```
npm run dev
```

# 📌 Funcionalidades da API
Registro de usuário (/register)

Login com JWT (/login)

- CRUD de contatos:

  - GET /contatos – Listar contatos

  - POST /contatos – Criar novo contato

  - PUT /contatos/:id – Atualizar contato

  - DELETE /contatos/:id – Deletar contato

Todas as rotas de contatos requerem autenticação via Bearer Token.

# 🧪 Teste com Insomnia/Postman
Faça login para obter um token JWT.

Use o token para acessar as rotas protegidas enviando no header:

```
Authorization: Bearer <seu_token>
```

# 📄 Licença
Este projeto está sob a licença MIT.


# Vídeo de funcionamento

[![Watch the video](https://img.youtube.com/vi/VOG-yhmjx00/maxresdefault.jpg)](https://youtu.be/VOG-yhmjx00)
