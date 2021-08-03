import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('ad', {
            aliases: ['ad'],
            description: 'make an ad of someone kek',
            usage: '$ad @user',
            args: [
                {
                    id: 'user',
                    type: 'member',
                    match: 'restContent'
                }
            ],


        })
    }
    async exec(message, args) {
        const user = args.user.user || message.author
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });
        // Make the image
        const img = await new DIG.Ad().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}