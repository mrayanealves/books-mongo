# Books MongoDB
Um repositório com um CRUD de livros.

### Tecnologias
1. [NodeJS](https://nodejs.org/en/download/)
2. [MongoDB](https://www.mongodb.com/download-center/community)
3. [Mongoose](https://mongoosejs.com/docs/)

### Informações gerais
A proposta dessa atividade é desenvolver um CRUD simples em uma API Rest com NodeJS, usando MongoDB como banco de dados.

### Organização do projeto
A organização das pastas foi pensada da seguinte forma:

* **config**: possui os arquivos de configuração do projeto. Nesse caso, só possui o arquivo database.js que conecta com o banco MongoDB utilizando o Mongoose;

* **router**: possui os arquivos de controle do projeto. Basicamente, onde as rotas estão mapeadas e a chamada dos serviços nos arquivos services para cada uma delas;

* **controller**: possui os arquivos em que os serviços serão processados. Esses arquivos recebem as informações contidas nas requisições que chegaram do router e processam de acordo com o que está definido na função;

* **model**: possui os arquivos que trabalham diretamente com as ações no banco de dados; ou seja, eles são responsáveis por reproduzir os documentos do banco.

### Executando o projeto

Para executar o projeto, primeiramente clone esse repositório em sua máquina. 

Certifique-se de que o Mongo esteja rodando e execute os comandos:

> $ npm install 

Para a instalação dos pacotes do NodeJS; e

> $ node app.js

Para rodar a aplicação. 

Se a aplicação for executada com sucesso, a mensagem `App listening on port 3001` aparecerá no seu terminal.

Por fim, acesse no seu browser o link localhost:3001 e verifique se recebe o *Welcome* do sistema.

### As operações

O retorno das requisições é um json com o resultado da operação, ou uma mensagem de erro (caso tenha havido algum).

Para facilitar a execussão, disponibilizei uma documentação com as rotas do sistema, bem como o corpo esperado nas requisições e o tipo de retorno de cada uma. O acesso dessa documentação está disponível [clicando aqui](https://documenter.getpostman.com/view/6141382/SW17Rajn).
