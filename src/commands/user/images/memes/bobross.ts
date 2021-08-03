import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('bobross', {
            aliases: ['bobross'],
            description: 'bobross',
            usage: '$bobross @user',
            args: [
                {
                    id: 'userid',
                    type: 'user',
                    match: 'restContent'
                }
            ]
        })
    }
    async exec(message, args) {
        if(!args.userid) return message.reply("Please mention a user, or yourself.")

        const avatar = args.userid.displayAvatarURL({ dynamic: false, format: 'jpg' });
        // Make the image
        const img = await new DIG.Bobross().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}