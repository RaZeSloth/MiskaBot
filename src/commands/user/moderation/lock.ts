import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';

// pls make if no perm for bot = actually send a message instead of showing the defualt error thing
export default class lock extends BotCommand {
    constructor() {
        super('lock', {
            aliases: ['lock'],
            description: 'Lock a channel',
            usage: '$lock ',
            cooldown: 2000,
            slash:true,
            slashOptions: [

        ]
        })
    }
    async exec(message) {
//nothing to do here

        const aa = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone")

        const upermEmbed = new MessageEmbed()
        .setColor('#03dbfc')
        .setTitle('Lock Command')
        .setDescription('You do not have permission to do execute this command!')
        .setTimestamp()
        .setFooter('Permission Error MANAGE_CHANNELS')
    
    
        if(!message.member.permissions.has(['MANAGE_CHANNELS', 'ADMINISTRATOR']))
        message.reply({ embeds: [upermEmbed] })

        if(!message.guild.me.permissions.toArray().includes('MANAGE_CHANNELS')) return message.reply("I do not have permission to lock this channel. (MANAGE_CHANNELS).")


        else {
    
        const msg = await message.reply("Loading...")

        const channel = message.channel
    
        try {

                  channel.permissionOverwrites.set([
                    {
                        id: aa,
                        deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
                    },
                ])

            msg.edit("Successfully Locked the channel!")
        }catch(e) {
            console.log(e)
        }
    }
}}