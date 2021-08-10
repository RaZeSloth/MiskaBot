
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')

export default class utility extends BotCommand {
    constructor() {
        super('rps', {
            aliases: ['rps'],
            description: 'Rock paper lol',
            usage: '$rps user',
			cooldown: 10000,

        })
    }

    async exec(message) {

        simplydjs.rps(message, {
            embedColor: "#1b44fa", // default: #075FFF
            timeoutEmbedColor: "#eb3b5b", // default: #075FFF
            drawEmbedColor: "#444047", // default: #075FFF
            winEmbedColor: "#15d448", // default: #c90000
            embedFooter: "A Game of RPS",
            rockColor: "SUCCESS", // default: "SECONDARY"
            paperColor: "PRIMARY", // default: "SECONDARY
            scissorsColor: "DANGER", // default: "SECONDARY"
        })}}