<h3 align="center">
	<img width="300px" src="https://raw.githubusercontent.com/higorpo/ecoleta/master/.github/logo.png" alt="Ecoleta"/>
  <br/>
	<span>
		Uma aplicação que ajuda pessoas a encontrarem pontos de coleta para reciclagem.
	</span>
</h3>

# Indice 
- [Sobre](#sobre)
- [Tecnologias usadas](#tecnologias)
- [Resultados](#resultados)
- [Como usar?](#comousar)

<a id="sobre"></a>
## :bookmark: Sobre
<p>
Este projeto foi criado a partir da trilha <b>booster</b> ao longo da semana da 1ª edição do evento <b>Next Level Week</b>, um evento promovido pela <a href="https://rocketseat.com.br">Rocketseat</a> que aborda diversos conteúdos relacionados a programação. A ideia do aplicativo é fornecer uma interface web que permita que usuários cadastrem pontos de coleta de resíduos que possam ser acessados através de uma interface mobile.
</p>

<a id="tecnologias"></a>
## :rocket: Tecnologias
<p>
Este projeto foi inteiramente desenvolvido utilizando-se das tecnologias abaixo:
</p>

- Node.js
- TypeScript
- ReactJS
- React Native
- Expo

<a id="resultados"></a>
## :heavy_check_mark: Resultados
<p>Durante os 5 dias da semana do Next Level Week foi possível construir uma aplicação web utilizando-se do ReactJS, uma aplicação mobile utilizando-se do React Native com o Expo e um servidor utilizando-se do Node.js com o Express.

Detalhes de implementação das interfaces web e mobile podem ser vistas a partir do link do <a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/">Figma</a>, na qual o projeto foi baseado.</p>

<a id="comousar"></a>
## :fire: Como usar?
<p>Para executar este projeto em sua máquina local existem alguns requisitos básicos. Você deve ter o Node.js instalado na sua versão mais recente, o gerenciador de pacotes Yarn ou NPM, e por fim ter a CLI do Expo.</p>

Clone este repositório
```sh 
git clone https://github.com/higorpo/ecoleta.git
```

Instale as dependências do projeto
```sh 
yarn
```
Crie o banco de dados
```sh 
cd backend
yarn knex:migrate
yarn knex:seed
```
Inicie o servidor
```sh 
yarn dev
```

Inicie a aplicação web
```sh 
cd ../web
yarn start
```

Inicie a aplicação mobile
```sh 
cd ../mobile
yarn start
```
