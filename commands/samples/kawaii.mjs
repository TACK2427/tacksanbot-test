import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('kawaii')
  .setDescription('Botが返事してくれるよ');

export async function execute(interaction){
	await interaction.reply('# かわいい');
}
