
curl -X POST http://localhost:8080/login \
     -H "Content-Type: application/json" \
     -d '{"email": "inexistente@example.com", "password": "Senha123"}'
