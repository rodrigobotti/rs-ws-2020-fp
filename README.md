# Rocketseat Workshop 2020 - Curry, aplicação parcial e composição de funções

Nesse workshop vamos aprender sobre _higher order functions_, _curry_, _aplicação parcial_ 
e como essas técnicas de programação funcional facilitam _composição de funções_.

No final vamos escrever uma pequena aplicação ilustrando como utilizando essas técnicas 
conseguimos deixar nosso código declarativo, expressivo, legível e extensível.

## O workshop

Os conceitos listados serão apresentados utilizando _javascript_ (_Node.JS_) como linguagem.

### Etapas

O workshop será dividido nas seguintes etapas:

1 . Higher order functions
  - o que são ?
  - por que ?
  - exemplos
    - onde são utilizados na "standard library"
    - outras aplicações práticas
  
2 . Curry
  - o que é ?
  - exemplos

3 . Aplicação parcial
  - o que é ?
  - exemplos ?
  - porque ?

4 . Composição facilitada
  - o que é ?
  - utilizando os conceitos apresentados para escrever código declarativo
  - adicionando funcionalidades através de composição

5 . Aplicação
  - um crawler concorrente
    - api com rate limiting

### Acompanhando

A condução do workshop será feita via _live coding_ no arquivo `workshop/index.js`.
Esse arquivo terá _live reload habilitado_: estará sendo "escutado" para que quando ele seja salvo, seja re-executado e os resultados sejam apresentados no terminal.

A cada etapa, esse arquivo será modificado para apresentar os conceitos das mesmas.

#### Pré-requisitos

Para conseguir acompanhar o workshop será necessário ter no ambiente

- [Docker](https://www.docker.com/) e [docker-compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)
- Conta no [Github](https://github.com/)
- Última versão de [Node.JS](https://nodejs.org/en/) (14+)
  - recomendo a utilização do [NVM](https://github.com/nvm-sh/nvm)
- Preparar sua versão do repositório
  - [fork](https://github.com/rodrigobotti/rs-ws-2020-fp/fork) desse repositório
  - _git clone_ do repositório
  - executar no diretório do projeto
  ```sh
  # caso tenha optado pelo uso do nvm
  # (a versão de node vem do arquivo .nvmrc na raíz)
  nvm install
  nvm use

  # instalar as dependências
  npm install
  ```

#### Executando

Recomendo a utilização de algum editor de texto ou terminal que permita split de tela,
dessa forma é possível manter o arquivo aberto pra edição e o terminal lado a lado
pra ver o resultado das mudanças simultaneamente.

Para executar o arquivo `workshop/index.js` e editá-lo no modo _live reload_ descrito acima
```sh
npm start
```

Para execução da [Etapa 5](#Etapas) (crawler concorrente de api de catálogo de produtos),
será necessário iniciar a API que será crawleada localmente. Para isso basta.
```sh
# inicia a API de catálogo de produtos utilizando docker-compose
npm run api
```
O código da API está no diretório `api` (Node.JS). Os produtos e categorias são hardcoded em memória mesmo.

Outros comandos da api
```sh
# verifica o status da API
npm run api:status

# derruba a API
npm run api:kill
```

## Pós workshop

### Código produzido
Todo código produzido nesse workshop está disponível no branch `cheat-sheet` dentro do diretório `workshop`
segmentado em um arquivo por etapa. 

PS: exceto pelo arquivo `workshop/4-challenge` que contém o crawler concorrente,
os outros arquivos são um catadão de funções utilizadas durante o workshop, os arquivos não necessariamente executam corretamente
i.e. use como referência, não como scripts

### Lição de casa

1 . Tente implementar sua própria versão da função `concurrently` apresentada no workshop
sem utilizar a dependência `pMap`
(Dicas: as funções `Promise.all`, `reduce` e `splitEvery` - do ramda para fazer chunks de lista - são suas amigas; entender como o `serially` funciona pode ajudar)

2 . Pense como seria se a API tivesse algum mecanismo de autenticação e os endpoints fossem autenticados via token. 

2.1 . Assumindo que o token tem duração maior do que o processo como um todo, como poderíamos transmitir esse token internamente pras nossas funções que executam as requests?

2.2 . Assumindo que o token pode expirar durante o processo, como poderíamos lidar com isso?

### Referências

Esse workshop foi inspirado [nesse artigo que escrevi há um tempo atrás](https://medium.com/nexa-digital/currying-and-partial-application-composition-made-easier-30aedaa54b5f?source=friends_link&sk=fb30e1e20d7a63c2f80e188916714fa0) que fala sobre esses conceitos de programação funcional. 
Pode ser útil caso queira ler com mais calma do que o ritmo do workshop.
Além disso, dentro dele tem diversas referências há outros artigos que lidam com cada conceito individualmente e com mais profundidade, recomendo a leitura deles também.
