import 'dotenv/config'
import discord, { VoiceChannel } from "discord.js"
import ytdl from "ytdl-core"

const { url, channelId, token } = process.env
const client = new discord.Client();

let broadcast = null;
let interval = null;

if (!token) {
  console.error("token invalido krk, coloca o certo ae");
  process.exit(1);
} else if (!channelId || Number(channelId) == NaN) {
  console.log("id errado amigo");
  process.exit(1);
} else if (!ytdl.validateURL(url)) {
  console.log("link está errado.");
  process.exit(1);
}

client.on('ready', async () => {
  client.user.setActivity("Coding with Lo-fi");
  let channel = client.channels.cache.get(channelId) || await client.channels.fetch(channelId)

  if (!channel) {
    console.error("canal não existe");
    return process.exit(1);
  } else if (channel.type !== "voice") {
    console.error("id não é de um canal de voz oooo bocó!");
    return process.exit(1);
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


client.on('message', message => {
	if (message.content === '!stop') {
    message.guild.me.voice.channel.leave()
    process.exit()
	}
});

client.login(token)

process.on('unhandledRejection', console.error);
