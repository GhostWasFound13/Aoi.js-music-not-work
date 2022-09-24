const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token,
prefix: "e!",
intents: "all"
})

bot.loadCommands("./command")
bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! $pingms` //Code inside of string
})

bot.readyCommand({
    channel: "891561785268793374", //Optional channnel ID
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.command({
name: "nightcore",
code: `NIghtcore Activated
$songFilter[speed:1.0;pitch:1.1]`
})

bot.command({
name: "nightcore1",
code: `NIghtcore Activated
$songFilter[speed:1.1;pitch:1.1]`
})

bot.status({
  text: "playing with you gae",
  type: "PLAYING",
  time: 10
})

//Part3
bot.reactionAddCommand({
 channel: '$channelID',
 code:`$if[$emojiToString==⏸️]
 $replaceText[$resumeSong;:x:Nothing being played!;;]
 $suppressErrors
 $elseif[$emojiToString==⏭️]
 $skipSong
 $suppressErrors
 $onlyIf[$voiceID[$authorID]==$voiceID[741280410180386947];]
 $endelseif
 $elseif[$emojiToString==⏹️]
 $pauseSong
 $suppressErrors
 $onlyIf[$voiceID[$authorID]==$voiceID[741280410180386947];]
 $endelseif
 $elseif[$emojiToString==🔊]
 $volume[100]
 $suppressErrors
 $onlyIf[$voiceID[$authorID]==$voiceID[741280410180386947];]
 $endelseif
 $elseif[$emojiToString==🔉]
 $volume[50]
 $suppressErrors
 $onlyIf[$voiceID[$authorID]==$voiceID[741280410180386947];]
 $endelseif
 $elseif[$emojiToString==➿]
 $editMessage[$getServerVar[musicmsgq];{title:Queue Status}{description:$queue}{footer:Loop Status-$loopStatus}{color:RANDOM};$getServerVar[musicch]]
 $replaceText[$replaceText[$loopSong;true;];false;]
 $suppressErrors
 $onlyIf[$voiceID[$authorID]==$voiceID[833258899897450538];]
 $endelseif
 $endif
 $onlyIf[$authorID!=741280410180386947;]
 $onlyIf[$messageID==$getServerVar[musicmsg];]`})

//Replace the id with ur bots id, this code doesn't exist in wikis so no chance of copying

//player system(like Hydra premium)
//rt1



bot.musicStartCommand({
 channel: '$channelID', //$channelID allows it to send where the user ran the play command from
 code: `
	$if[$getServerVar[musicch]!=]	$editMessage[$getServerVar[musicmsg];{title:Currently playing}{description:$songInfo[title]}{image:$jsonRequest[http://api.somecool.repl.co/yt-search?search=$songInfo[title];thumbnail]}{color:RANDOM}{footer:$addTimestamp};$getServerVar[musicch]]
	$editMessage[$getServerVar[musicmsgq];{title:Queue status-$queueLength}{description:$queue[1;10;\`\`\`{number} - {title} by\`\`\` <@{userID}>]}{footer:$loopStatus}{color:RANDOM};$getServerVar[musicch]]
	$onlyIf[$channelExists[$getServerVar[musicch]]==true;]`})

bot.variables({
  musicch: "", 
  musicmsg: "",
  musicmsgq: ""
})     
