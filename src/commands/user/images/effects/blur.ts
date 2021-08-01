import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('blur', {
            aliases: ['blur'],
            description: 'rekt',
            usage: '$blur @user',
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
//nothing to do here but, if user mentions a role make it say "please do not mention a role. instead mention a user or yourself"
        const user = message.author;
        
        const avatar = args.userid.displayAvatarURL({ dynamic: false, format: 'jpg' })
        // Make the image
        const img = await new DIG.Blur().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}