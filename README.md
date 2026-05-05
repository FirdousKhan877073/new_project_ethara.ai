# new_project_ethara.ai

# 🚀 Auth API (Node.js + Express)

A simple REST API for user authentication built using Node.js and Express.  
Supports user registration and login, and is deployed on Railway.



 🛠️ Tech Stack
Node.js | Express.js | JavaScript | Railway



⚙️ Setup

bash
git clone https://github.com/your-username/new_project_ethara.ai.git
cd new_project_ethara.ai
npm install
npm start


Server runs on:
http://localhost:5000
 
 🌐 Live API
https://your-app-name.up.railway.app

 📬 API Endpoints

Register

POST `/api/auth/register`

json
{
  "name": "Firdous",
  "email": "firdous@example.com",
  "password": "123456"
}


 Login

POST `/api/auth/login`

json
{
  "email": "firdous@example.com",
  "password": "123456"
}
 📂 Structure


routes/auth.routes.js
app.js
server.js


 ⚠️ Note

Uses dynamic port:

js
const PORT = process.env.PORT || 5000;

 👨‍💻 Author
   Firdous Khan



