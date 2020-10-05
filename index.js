const Discord = require("discord.js");
const client = new Discord.Client;
const config = require("./config.json");

var prefix = config.prefix;

client.commands = new Discord.Collection();
client.on("ready", () => {
    console.log(`${client.user.username} Listo / Ready!`);
    client.user.setActivity("Discord")
});

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    console.log(comando);

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return; 
    
    switch (comando) {
        case "hola":
            message.channel.send("¡Hola!")
            break;
            case "embed":
                const embed = new Discord.MessageEmbed() 
                embed.setTitle("Titulo del Embed") //Titulo del Embed / Embed Title
                embed.setAuthor(message.author.username, message.author.displayAvatarURL()) //Autor del mensaje, Se puede escribir entre "" / Author of the message, You can write between ""
                embed.setColor("0x00AE86") //Color (Hex) del embed / Color (Hex) of the embed
                embed.setDescription("Descripción / Campo principal del Embed") //Descripción del embed / Embed Description
                embed.setFooter("Pie / Footer del Embed", client.user.avatarURL()) //Pie / Footer del embed, Esto se muestra abajo del todo / Footer of the embed, This is shown at the bottom
                embed.setImage(message.author.displayAvatarURL()) //Imagen del Embed / Embed Image
                embed.setThumbnail(message.author.displayAvatarURL()) //Miniatura del embed / Embed Thumbnail
                embed.setTimestamp() //Hora en la que se envió el mensaje. / Time the message was sent.
                embed.setURL("https://github.com/Hexpod604") //URL para el Titulo / URL for Title
                embed.addField("Campo / Field del Embed", "Valor / Value el Embed") //Campo del Embed / Embed field
                embed.addField("Campo / Field del Embed", "Un embed puede tener un maximo de 25 Campos / Fields", true); //Campo del Embed, El "true" sirve para poner un campo al lado del otro / Embed field, The "true" serves to put one field next to the other
                embed.addField("Campo / Field del Embed", "Un embed puede tener un maximo de 25 Campos / Fields", true); //Ejemplo de un field al lado del otro / Example of a field next to the other
            message.channel.send(embed);
            }
            })

client.login(config.token);
