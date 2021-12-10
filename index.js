import 'dotenv/config'
import Discord from 'discord.js'
import YTDL from 'ytdl-core'

const { url, channelId, token } = process.env;

let playing = false

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
})

const play = async (connection) =>
  new Promise((resolve, reject) => {
    playing = true;
    const stream = YTDL(url, { filter: 'audioonly' });
    const dj = connection.play(stream, { seek: 0, volume: 1.5 });
    dj.on('finish', () => {
      playing = false;
      resolve()
    })
    dj.on('error', (err) => {
      playing = false;
      reject(err)
    })
  })

const connect = async () => {
  const voiceChannel = await client.channels.fetch(channelId);
  if (!voiceChannel) {
    throw new Error("Canal não encontrado");
  }
  return await voiceChannel.join();
}

async function replay() {
  const voiceConnection = await connect();
  try {
    while (true) {
      await play(voiceConnection);
      console.log(playing)
    }
  } catch (error) {
    console.error(error)
  } finally {
    playing = false;
    voiceConnection.disconnect()
  }
}

client.on('ready', async () => {
  console.log("Codefi on")
  await replay()
})

client.on('message', async message => {
  if (message.content === '<3replay') {
    if (!playing) {
      await replay()
    }
  }
})

client.login(token)
