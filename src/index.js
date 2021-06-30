import "dotenv/config";
import { Client } from "discord.js";
import { validateURL } from "ytdl-core";
import { join } from "path";

import registryEvents from "./utils/registryEvents";
import { play } from "./utils/play";
const { url, channelId, token } = process.env;

const client = new Client();
client.broadcast = null;
client.streamDispatcher = null;
client.interval = null;

if (!token) {
	console.error("Token invalido krk, coloca o certo ae");
	process.exit(1);
} else if (!channelId || Number(channelId) == NaN) {
	console.error("Id errado amigo");
	process.exit(1);
} else if (!validateURL(url)) {
	console.error("Link está errado.");
	process.exit(1);
}

registryEvents(client, join(__dirname, "events"));

setInterval(async function () {
	if (!client.voice.connections.size) {
		let channel =
			client.channels.cache.get(channelId) ||
			(await client.channels.fetch(channelId));
		if (!channel) return;

		play(channel, client);
	}
}, 20000);

client.login(token);

process.on("unhandledRejection", console.error);
