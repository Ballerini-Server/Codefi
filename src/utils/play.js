import ytdl from "ytdl-core";
const { url } = process.env;

const play = async (channel, client) => {
	try {
		const connection = await channel.join();
		const dispatcher = connection
			.play(client.broadcast, {
				type: "opus",
			})
			.on("error", console.error);

		client.broadcast.dispatcher.on("finish", () => {
			createBroadcast(client);
			play(channel, client);
		});

		dispatcher.setVolume(1);
	} catch (error) {
		console.error(error);
	}
};

const createBroadcast = async (client) => {
	client.broadcast = client.voice.createBroadcast();

	let stream = ytdl(url, {
		filter: "audioonly",
		highWaterMark: 1 << 25,
	});
	stream.on("error", console.error);

	client.broadcast.play(stream);

	if (!client.interval) {
		client.interval = setInterval(async function () {
			try {
				if (stream && !stream.ended) stream.destroy();
				stream = ytdl(url, {
					filter: "audioonly",
					highWaterMark: 1 << 25,
				});
				stream.on("error", console.error);
				client.broadcast.play(stream);
			} catch (e) {
				return;
			}
		}, 1800000);
	}
};
export { play, createBroadcast };
