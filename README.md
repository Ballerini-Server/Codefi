# Codefi 🌃

### Um bot criado pela [Comunidade Ballerini](https://discord.gg/G9GPg5SA75) para você ouvir músicas Lo-Fi sem parar enquanto desenvolve em um canal específico para isso. 

# Para contribuir no desenvolvimento do projeto:

**1. Primeiramente você fará o fork do nosso repositório, pelo botão que aparece no canto direito superior `fork`**

Para colocar agora os arquivos na sua máquina, você fará um clone do repositório adicionado no seu github. Para isso, dentro do seu repositório haverá um botão `code`, onde você conseguirá copiar uma url. Utilize-a para rodar o comando dentro da pasta que quiser `git clone <link copiado>`.

![Url para git clone](https://media.discordapp.net/attachments/815597906622021632/859069020241264652/unknown.png)

*Caso ainda não esteja familiarizado(a) com git e github, recomendamos assistir os seguintes vídeos: [O que é Git e Github](https://www.youtube.com/watch?v=DqTITcMq68k) e [Como usar Git e Github na prática](https://www.youtube.com/watch?v=UBAX-13g8OM)*

**2. Dentro da pasta, no terminal a sua escolha, instale as dependências necessárias para o projeto com o comando:**
`npm i`

**2. Crie um arquivo `.env` na raíz do projeto, onde colocaremos as variáveis ambiente, que ficam disponíveis apenas para a pessoa que irá desenvolver.**

**3. Crie um bot [nesse link](https://discord.com/developers/applications/) e copie o token disponível para colocar no arquivo `.env`** <br><br>
*(Caso não saiba criar um, basta clicar em `New Application` e depois em `Bot` no canto esquerdo para adicionar um novo. Lá aparecerá o token a ser adicionado no arquivo `.env`)*

Além do token, é necessário adicionar outras 2 variáveis ambiente, `url` (que será a url do vídeo com as músicas lo-fi sem copyright) e `chanelId` (o ID do canal de voz em que o bot entrará, basta clicar com o botão direito no canal). Veja abaixo um molde para você criar esse arquivo:

![Exemplo de arquivo .env](https://media.discordapp.net/attachments/815597906622021632/859055318927278100/unknown.png)

**5. Adicione o seu bot ao seu servidor para testá-lo!**

Para isso, você precisa criar um link [nesse site](https://discordapi.com/permissions.html) com as permissões necessárias para ele, que serão: `Read Messages`, `Send Messages`, `View channel`, `Connect`, `Speak` e `Use Voice Activity`.

Depois disso, colocará o `Client ID`, disponível em `General information`, na página em que você criou o seu bot.

**6. Rode o projeto com:**
`node index.js`

**7. Edite o código da forma que acha que poderá ser melhor para o projeto, adicionando features, resolvendo problemas que encontrar, iremos avaliar toda forma de contribuição!**

**8. Faça um `pull request` para o nosso repositório e descreva exatamente o que você alterou e qualquer ação necessária que devemos fazer para testar ou rodar.**

### Desde já agradecemos qualquer contribuição! ❤
