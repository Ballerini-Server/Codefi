import 'dotenv/config'
import discord from "discord.js"
import ytdl from "ytdl-core"

const { url, channelId, token } = process.env
const client = new discord.Client();

let broadcast = null;
let interval = null;

if (!token) {
  throw new Error("Token inválido!");
} else if (!channelId || !Number(channelId)) {
  throw new Error("Id inválido!");
} else if (!ytdl.validateURL(url)) {
  throw new Error("URL inválida!");
}

client.on('ready', async () => {
  client.user.setActivity("Coding with Lo-fi");
  let channel = client.channels.cache.get(channelId) || await client.channels.fetch(channelId)

  if (!channel) {
    throw new Error("Channel não existe!");
  } else if (channel.type !== "voice") {
    throw new Error("O tipo do canal deve ser de voz!");
  }

  broadcast = client.voice.createBroadcast();
  let stream = ytdl(url);
  stream.on('error', console.error);
  broadcast.play(stream);
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream && !stream.ended) stream.destroy();
        stream = ytdl(url, { highWaterMark: 100 << 150 });
        stream.on('error', console.error);
        broadcast.play(stream);
      } catch (e) { return }
    }, 1800000)
  }
  try {
    const connection = await channel.join();
    connection.play(broadcast);
  } catch (error) {
    console.error(error);
  }
});

setInterval(async function () {
  if (!client.voice.connections.size) {
    let channel = client.channels.cache.get(channelId) || await client.channels.fetch(channelId);
    if (!channel) return;
    try {
      const connection = await channel.join();
      connection.play(broadcast);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client.login(token)

process.on('unhandledRejection', console.error);
