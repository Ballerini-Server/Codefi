import "dotenv/config";
import Discord from "discord.js";
import YTDL from "ytdl-core";

const url = "https://www.youtube.com/watch?v=_DYAnU3H7RI";
const channelId = "858420360441364500";
let playing = false;

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

async function play(connection) {
  playing = true;
  const stream = YTDL(url, { filter: "audio" });
  const DJ = connection.play(stream, { seek: 0, volume: 1 });
  DJ.on("finish", async (end) => {
    await play(connection);
  });
}

async function replay() {
  const voiceChannel = await client.channels.fetch(channelId);
  if (voiceChannel) {
    voiceChannel
      .join()
      .then((connection) => {
        if (!playing) {
          play(connection);
        }
      })
      .catch((error) => {
        console.log(error);
        playing = false;
      });
  }
}

client.on("ready", async () => {
  console.log("Codefi on");
  replay();
});

client.on("message", (message) => {
  if (message.content === "<3play") {
    if (!playing) {
      replay();
    }
  }
});

client.login(process.env.token);
