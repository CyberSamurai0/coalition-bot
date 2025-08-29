import * as Discord from "discord.js";
import {warn, info, ok, err, power} from "./log";

const client : Discord.Client = new Discord.Client({
    intents: []
});

client.once(Discord.Events.ClientReady, client => {
    info(`Logged in as ${client.user.tag}: ${client.user.id}`);
});

client.login(process.env.DISCORD_TOKEN).then(() => {power("Authenticated with Discord")}).catch(e => {err("Failed to authenticate with Discord:"); console.log(e)});