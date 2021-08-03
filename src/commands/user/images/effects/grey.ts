import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class grey extends BotCommand {
    constructor() {
        super('grey', {
            aliases: ['grey'],
            description: 'grey someone kek',
            usage: '$grey @user',
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
        const img = await new DIG.Greyscale().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}