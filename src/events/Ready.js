import BaseEvent from "./BaseEvent";
import { createBroadcast, play } from "../utils/play";

const { channelId } = process.env;

export default class Ready extends BaseEvent {
  constructor() {
    super("ready");
  }

  async run(client) {
    client.user.setPresence({
      activity: {
        name: "Coding with Lo-fi",
        type: "STREAMING",
        url: "https://www.twitch.tv/rafaballerinii",
      },
      status: "dnd",
    });

    let channel =
      client.channels.cache.get(channelId) ||
      (await client.channels.fetch(channelId));

    if (!channel) {
      console.error("Canal não existe");
      return process.exit(1);
    } else if (channel.type !== "voice") {
      console.error("Id não é de um canal de voz oooo bocó!");
      return process.exit(1);
    }

    try {
      await createBroadcast(client);
      play(channel, client);
    } catch (error) {
      console.error(error);
    }
  }
}
