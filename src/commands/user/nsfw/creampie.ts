import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import { MessageEmbed } from 'discord.js';

export default class creampie extends BotCommand {
    constructor() {
        super('creampie', {
            aliases: ['creampie'],
            description: '[NSFW CHANNELS ONLY] creampie picture',
            usage: '-creampie',
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        message.reply({ embeds: [await utils.hentai('creampie')] })
    }
}