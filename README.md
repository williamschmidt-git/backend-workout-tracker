# backend-workout-tracker

## Instalação
- Em sua pasta de projetos, utilize o comando: ```git clone https://github.com/williamschmidt-git/backend-workout-tracker.git```
- Na pasta raíz do projeto utilize o comando ```npm run deploy```(é necessário ter o docker e o docker-compose instalados na máquina)
- Após criação de imagens e containers, o endereço ```http://localhost:3001/``` da API estará disponível para requisições.
------

### Endpoints disponíveis
- POST user ```http://localhost:3001/user/create```
Formato da requisição(JSON):
``` 
  {
    "username": "username",
    "password": "password"
  }
```
- POST login ```http://localhost:3001/login``` 
Formato da requisição(JSON):
``` 
    {
      "username": "username",
      "password": "password"
    }
  ```
- GET login ```http://localhost:3001/workout```
