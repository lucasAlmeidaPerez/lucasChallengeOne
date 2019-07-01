# lucasChallengeOne
Desafio Sabion FullStack


# API
A API presente neste repositório foi criada utilizando nodeJS e MongoDB. Poderia ter sido desenvolvida em uma outra linguagem como PHP,entretanto,
o node foi escolhido devido a sua alta escalabilidade. O projeto é pequeno e é composto apenas de 10 funções.
Os comentários no código foram feitos em inglês para torná-lo mais abrangente entretanto a versão em inglês dessa documentação não esta
pronta mas em breve se necessário estará disponível.

Este projeto tem como objetivo atender as necessidades propostas no documento da primeira etapa da vaga de desenvolvedor FULLSTACK da
SABION DIGITAL.

Esta API é capaz de:

-   Registrar, retornar, atualizar e deletar um bot;
-   Registrar novas mensagens;
-   Retornar uma mensagem pelo seu identificador único;
-   Retornar todas as mensagens de uma determinada conversa;

Foi criado um pequeno site com REACT para consumir essa API apenas como exemplo. Este site está presente neste repositório na pasta
botapp caso queira utiliza-lo também para observar a API sendo utilizada, bastando apenas instalá-la em sua máquina.

# Instalação da API

A API está disponível para acesso em https://sabion-challenge-one.herokuapp.com/api e o banco de dados está hospendado utilizando
os serviços do site: https://www.mongodb.com/cloud/atlas e estará disponível por um tempo determinado (1 mês a contar de 29/06/2019). 
Caso esteja acessando este repositório após este período é aconselhado instalar esta em sua maquina!

Para instalar é simples. Após clonar ou baixar este repositório para seu computador execute os próximos passos para concluir a instalação da API 

## Alterações necessárias no arquivo .env.template
Existe um arquivo neste repositório chamado .env.template, este arquivo é um modelo do arquivo .env necessário para rodar a API mas
antes de executar esta API é necessário fazer algumas alterações nesse arquivo:

- Altere o nome do arquivo para .env e o abra em seu editor de texto de preferencia
- Na primeira linha você encontrará o seguinte códgio: MONGO_URI='Your URI' troque o valor 'Your URI' para o endereço do seu banco de dados
mongo
- *Ferramentas como o Docker podem te ajudar a criar um banco de dados Mongo para esta api.

Após realizar as alterações execute o próximo passo para terminar a instalação

## Execute a aplicação pelo terminal

Abra a pasta raiz onde se encontra esta API no seu terminal e então digite o seguinte código.

```
  node index.js
```

Se executou todos os passos anteriores corretamente deverá aparecer em seu terminal a seguinte mensagem

```
  aplicação conectada ao banco de dados!
```

Pronto! Já pode acessar a API pelo seu dominio ou pelo seguinte enderço: http://localhost:3001/api/

Note que quando acessar o endereço acima você receberá a seguinte mensagem:

```
  Cannot GET /api
```

Não se preocupe. Os métodos da api são acessados utilizando os seguintes endereços:

### Método retrieveBots

Retorna todos os bots salvos no seu banco.

```
 http://localhost:3001/api/bots || https://www.seudominio.com/api/bots
```

### Método showBot

Retorna os dados de um determinado bot.

```
 http://localhost:3001/api/bots/idDoSeuBot || https://www.seudominio.com/api/idDoSeuBot
```

### Método allMessages

Retorna todos as mensagens salvas no seu banco.

```
 http://localhost:3001/api/messages || https://www.seudominio.com/api/messages
```

### Método retrieveMessage

Retorna uma mensagen pelo o ID.

```
 http://localhost:3001/api/messages/idDaSuaMensagem || https://www.seudominio.com/api/messages/idDaSuaMensagem
```

### Método retrieveMessagesByChatId

Retorna todas as mensagens de uma determinada conversa

```
 http://localhost:3001/api/messages/idDaSuaConversa || https://www.seudominio.com/api/messages/idDaSuaConversa
```


## Os seguintes métodos não retornaram informações para o usuário pelo navagador

Estes métodos podem ser testados ou observados utilizando o Insomnia ou rodando testes unitários por exemplo. Existe um modelo de
teste na pasta test que pode ser adaptado da maneira que preferir ou pode executá-lo da maneira em que está para testar as funcionalidades
básicas do bot.

### Método createBot

Cria um bot. Este método é realizado via POST e portanto necessita de um texto no formato JSON para ser processado pelo banco de dados.
No fim do método ele retorna os dados do bot que você criou.

Obs.: Se simplesmente acessar o método pelo navegador sem enviar um texto no formato JSON antes, a API entenderá que você esta fazendo
uma requisição get e retornará o método retrieveBots


### Método updateBot

Atualiza um bot utilizando uma requisição put utilizando como parâmetro o id do bot


### Método deleteBot

Deleta um bot utilizando uma requisição delete utilizando como parâmetro o id do bot


### Método createMessage

Cria uma mensagem. Este método é similar ao createBot e é realizado via POST e portanto necessita de um texto no formato JSON para ser processado pelo banco de dados.
No fim do método ele retorna os dados da mensagem que você criou.


### Método deleteMessage

Deleta uma mensagem utilizando uma requisição delete utilizando como parâmetro o id da Mensagem



#Instalando a aplicação React (botApp)

Extremamente simples rodar a aplicação React da pasta botApp.

Basta abrir o terminal na pasta botApp e executar o seguinte comando.

```
  npm run start
```

Pronto você já pode ver uma aplicação consumindo a API!

### Atenção!!

A aplicação botApp está consumindo a api que está hospedada em https://sabion-challenge-one.herokuapp.com/api . Caso esteja
acessando este documento após 29/07/2019 há chance desta api não estar mais online e portanto há a necessidade de instalar a Api
em sua máquina e consumir ela a partir dai.



# Tolerância de Falhas e testes para esta API

Uma nova versão desta API poderá ser desenvolvida em outra linguagem para que seja possível praticar o método de Programação de 
N-Versões. Infelizmente ainda não foram tomadas medidas para assegurar a dependabilidade desta API entretanto teste unitários
foram realizados nesta API e um modelo do teste está disponível na pasta test. Utilzou-se o Mocha e o chai para a realização dos
testes.


#### Duvidas:

Mande um e-mail para: l.almeida.perez@gmail.com













