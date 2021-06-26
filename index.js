import "dotenv/config";
import Discord from "discord.js";
import YTDL from "ytdl-core";

const url = "https://www.youtube.com/watch?v=_tV5LEBDs7w";
const channelId = "858420360441364500";
let playing = false;

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

function play(connection) {
  playing = true;
  const stream = YTDL(url, { filter: "audioonly" });
  connection.play(stream, { volume: 1, seek: 0 });
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
