# Desafio 02/08/2021
Aplicativo backend criado em Node.js com typescript uma APT RESTful de criação de sing up/sign in.  
## Instalação :

- Configure o banco de dados em docker
1. Criando a imagem
```
sudo docker run --name postgres -e POSTGRES_PASSWORD=docker -d postgres -p 5432:5432
```
2. Iniciando docker
```
sudo docker start <container id>
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
- Criação das tabelas no bando de dados - Postgresql

> **Obs!** na base local comentar a linha `ssl": {rejectUnauthorized: false },` no arquivo ormconfig.js , em caso de deploy descomentar.  
```
yarn typeorm migration:run
```
## Uso do Insomnia
- O arquivo de importação se encontra da pasta insomnia na raiz do projeto

## API Restful hospedada Heroku 
[desafio](https://desafio-2021.herokuapp.com/).
