module.exports = {
	name: 'set-player',
	code: `$addMessageReactions[$getServerVar[musicch];$getServerVar[musicmsg];⏸️;⏯️;⏹️;🔊;🔉;➿;🔀]
 $wait[1s]
 $description[Techie Player has been successfully created]
 $footer[vote techie on top.gg]
 $setServerVar[musicmsgq;$channelSendMessage[$getServerVar[musicch];{title:Queue}{description:Empty queue}{footer:Loop status}{color:RANDOM};yes]]
 $setServerVar[musicmsg;$channelSendMessage[$getServerVar[musicch];{title:Currently Playing}{description:Nothing}{color:RANDOM};yes]]
 $channelSendMessage[$getServerVar[musicch];{title:Commands help}{description:Type +Music to view the manual commands, +join to join and +play to play, Reaction commands ⏸️=resume,⏭️=skip,⏹️=pause Song,🔉=50%volume,🔊=100%volume,➿=loopSong}{thumbnail:$userAvatar[741280410180386947]}{color:RANDOM};no]
 $channelSendMessage[$getServerVar[musicch];{title:Techie 24/7}{image:https://cdn.discordapp.com/attachments/742245061613453343/830343609840697354/Photo_16180396623622.png}{color:RED}{footer:Vote on top.gg};no]
 $wait[1s]
 $setServerVar[musicch;$createChannel[🔸techie player;text;yes]]
 $onlyIf[$hasPerms[$authorID;admin]==true;{title:Permission Missing}{description:You need admin permission}{color:RANDOM}]`
};