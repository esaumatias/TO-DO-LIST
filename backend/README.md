## Projeto Wine App

### Instalação do projeto - BACK-END

1. Instalar as dependência necessárias para o projeto: ```npm install```;

2. Crie um arquivo ```.env``` com a seguinte estrutura;

    (
    ```DB_HOSTNAME=ESCREVAAQUI```
    
    ```DB_USER=ESCREVAAQUI```
    
    ```DB_PASSWORD=ESCREVAAQUI```
    
    ```DB_DATABASE=tasks_api```
    


    ```TEST_DB_HOSTNAME=ESCREVAAQUI```
    
    ```TEST_DB_USER=ESCREVAAQUI```
    
    ```TEST_DB_PASSWORD=ESCREVAAQUI```
    
    ```TEST_DB_DATABASE=test_api```
    )

3. Crie um banco de dados no MySql com o seguinte código:
    (
   ``` CREATE DATABASE IF NOT EXISTS tasks_api;```

    ```USE tasks_api;```

    ```CREATE TABLE IF NOT EXISTS  tasks```
    
    ```(```
    
        ```id INT NOT NULL AUTO_INCREMENT,```
        
        ```title VARCHAR(30) NOT NULL,```
        
        ```tasks VARCHAR(200) NOT NULL,```
        
        ```date VARCHAR(50) NOT NULL,```
        
        ```status VARCHAR(30) NOT NULL,```
        
        ```PRIMARY KEY(id)```
        
    ```);```
       )

4. Iniciar o projeto: ```npm start```;
