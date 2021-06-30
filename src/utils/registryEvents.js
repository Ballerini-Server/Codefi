import { join } from "path";
import { readdirSync, lstatSync } from "fs";
import BaseEvent from "../events/BaseEvent";

const registryEvents = async (client, eventPath) => {
	const files = readdirSync(eventPath);

	for (const file of files) {
		const stat = lstatSync(join(eventPath, file));

		if (stat.isDirectory()) registerEvents(client, join(dir, file));

		if (file.endsWith(".js") && file != "BaseEvent.js") {
			const Event = require(join(eventPath, file)).default;

			if (Event.prototype instanceof BaseEvent) {
				const event = new Event();
				client.on(event.name, event.run.bind(event, client));
			}
		}
	}
};

export default registryEvents;
