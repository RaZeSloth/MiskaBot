import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';

export default class avatar extends BotCommand {
    constructor() {
        super('avatar', {
            aliases: ['avatar'],
            description: 'Show someones avatar',
            usage: '$avatar',

            args: [
                {
                    id: 'pain',
                    type: 'user',
                    match: 'restContent'
                }
            ]
        })
    }

<<<<<<< HEAD
 async exec(message, args) {
        const user = args.pain || message.author
    
        const avatar = user.displayAvatarURL({size: 4096, dynamic: true})
    
=======
    async exec(message) {

        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true })

>>>>>>> 8de07f1d68bc5743b3a4a46e1fe995b89093fbcb
        const embed = new MessageEmbed()
            .setTitle(`${user.tag}'s Avatar`)
            .setURL(avatar)
            .setImage(avatar)
            .setColor('RANDOM')
        message.reply({ embeds: [embed] });
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 8de07f1d68bc5743b3a4a46e1fe995b89093fbcb
