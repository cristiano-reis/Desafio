# Desafio 02/08/2021
Aplicativo backend criado em Node.js com typescript uma APT RESTful de criação de sing up/sign in.  
## Instalação :

- Configure o banco de dados em docker
Criando a imagem
```
sudo docker container run --name postgres -e POSTGRES_PASSWORD=docker -d postgres -p 5432:5432
```
- Clone o repositório
```
git clone https://github.com/cristiano-reis/Desafio.git
```
- Instalação de Dependências
```
cd Desafio
yarn install
```
> **Obs!** criar o arquivo .env na raiz do projeto.
```
APP_SECRET = SUA_CHAVE
DATABASE_URL = postgres://postgres:docker@localhost:5432/<nome_ do _banco>
```
- Criação das tabelas no bando de dados - Postgresql

> **Obs!** na base local comentar a linha `ssl": {rejectUnauthorized: false },` no arquivo ormconfig.js , em caso de deploy descomentar.  
```
yarn typeorm migration:run
```
## Hospedagem local
```
http://localhost:3333
```
## Uso do Insomnia
- O arquivo de importação se encontra da pasta insomnia na raiz do projeto
## Rotas
- post:.../usuario => {nome, email senha} cadastro (Insomnia - Cadastrar Usuário)
- post:.../sessao  => {email, senha} autenticação JWT do usuário com duração de 30 min (Insomnia - Sessão)
- get: .../usuario => buscar usuarios cadastrados autenticada somente pelo JWT (Insomnia - Listar Usuários)
- get: .../usuario/:id => busca o usuário por id autenticada somente pelo JWT  (Insomnia - Buscar Contato Por Usuário)
- get: .../index => simulando uma pagina index autenticada somente pelo JWT e recuperando somente o id do usuário. (Insomnia -Simulando usuário na  Pag. Index por(token))
- post: .../contato => {numero, ddd ,id} => cadastro de contato com autenticação JWT , numero do telefone , ddd e id do usuário (Insomnia - Cadastrar Contato)
- get: .../contato => buscar todos contaos cadastrado por cliente com autenticação JWT (Insomnia - Listar Contatos)
## API Restful hospedada Heroku 
[desafio](https://desafio-backend2021.herokuapp.com).
