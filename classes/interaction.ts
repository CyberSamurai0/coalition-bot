import * as Discord from "discord.js";

export class InteractionWrapper {
    interaction: Discord.Interaction;

    handler: (database: string) => void; // TODO fix the data type

    constructor(interaction: Discord.Interaction = null, handler: (database: string) => void) {
        this.interaction = interaction;
        this.handler = handler
    }
}