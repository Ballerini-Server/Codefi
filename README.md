# Codefi Ballerini🌃

Um bot criado pela [Comunidade Ballerini](https://discord.gg/wagxzStdcR) para você ouvir músicas Lo-Fi sem parar enquanto desenvolve em algum canal de voz!

## Tecnologias utilizadas No Projeto 🛠️

- [TypeScript](https://www.typescriptlang.org/pt/docs/)
- [Node.js](https://nodejs.org/en/)
- [Discord.js](https://discord.js.org/#/)
- [ytdl-core](https://www.npmjs.com/package/ytdl-core)
- 

## Esclarecimentos ⚠️

Nota: Há uma versão open-source nesse repositório que foi usada como base para o bot oficial e que está funcionando perfeitamente.

## Para contribuir no desenvolvimento do projeto 💻

1. Você fará o fork do nosso repositório, pelo botão que aparece no canto direito superior `fork`.

Para colocar agora os arquivos na sua máquina, você fará um clone do repositório adicionado no seu github. Para isso, dentro do seu repositório haverá um botão `code`, onde você conseguirá copiar uma url. Utilize-a para rodar o comando dentro da pasta que quiser `git clone <link copiado>`.

![Url para git clone](https://media.discordapp.net/attachments/815597906622021632/859069020241264652/unknown.png)

_Caso ainda não esteja familiarizado(a) com git e github, recomendamos assistir os seguintes vídeos: [O que é Git e Github](https://www.youtube.com/watch?v=DqTITcMq68k) e [Como usar Git e Github na prática](https://www.youtube.com/watch?v=UBAX-13g8OM)_

2. Dentro da pasta, no terminal a sua escolha, instale as dependências necessárias para o projeto com o comando:
```
npm install
```

3. Para obter o `.env`, basta escrever o seguinte código no seu terminal dentro da pasta do repositório:

```
cp .env.example .env
```
4. Crie um bot [neste link](https://discord.com/developers/applications/) e copie o token disponível para colocar no arquivo `.env` na parte que fica localizado o token. <br>

_(Caso não saiba criar um, basta clicar em `New Application` e depois em `Bot` no canto esquerdo para adicionar um novo. Lá aparecerá o token a ser adicionado no arquivo `.env`)_

Além do token, é necessário adicionar outras 2 variáveis ambiente, `url` (que será a url do vídeo com as músicas lo-fi sem copyright) e `chanelId` (o ID do canal de voz em que o bot entrará, basta clicar com o botão direito no canal). Veja abaixo um molde para você criar esse arquivo:

![Exemplo de arquivo .env](https://media.discordapp.net/attachments/815597906622021632/859055318927278100/unknown.png)


5. Rode o projeto com:
```
npm run dev
```
6. Edite o código da forma que acha que poderá ser melhor para o projeto, adicionando features, resolvendo problemas que encontrar, iremos avaliar toda forma de contribuição!

7. Faça um `pull request` para o nosso repositório e descreva exatamente o que você alterou e qualquer ação necessária que devemos fazer para testar ou rodar. Siga nosso [modelo de Pull Request](https://github.com/Ballerini-Server/Codefi/blob/main/.github/pull_request_template.md).

## Notas finais e Copyright ©️

Atualmente usamos a live do canal [Lofi Girl](https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow) para reproduzir a música usada. Não temos fins lucrativos pois o bot é totalmente público e mantido em um servidor particular que não recebe nenhum tipo de verba ou algo do tipo, sendo este um projeto 100% de entretenimento na plataforma discord que busca apenas contribuir para a comunidade

### Desde já agradecemos qualquer contribuição! ❤
