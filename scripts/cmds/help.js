const commandInfoMap = {
  ai: {
    name: "ai",
    description: "Ai Based on GPT-4",
    guide: "-ai what is life?"
  },
adduser: {
    name: "adduser",
    description: "add users to group chat using their uid or profile link",
    guide: "-adduser <uid>\n-adduser <profile link>"
  },
join: {
    name: "join",
    description: "check all group chats where the bot is active and join specific group chats by replying base on number list",
    guide: "-join\nreply with numbers to the list to join specific gc."
  },
  video: {
    name: "video",
    description: "searches and sends youtube video (mostly use between 1-7mins)",
    guide: "-video <video title>"
  },
  bard: {
    name: "bard",
    description: "Google Bard",
    guide: "-bard what is life"
  },
ban: {
    name: "ban",
    description: "Ban's members from using the bot",
    guide: "-ban <uid>"
  },
kick: {
    name: "kick",
    description: "kick's members out of gc",
    guide: "-kick <uid>\n-kick <@name>"
  },
restart: {
    name: "restart",
    description: "restart the bot",
    guide: "-restart"
  },
setname: {
    name: "setname",
    description: "change nickname of existing groupchat members",
    guide: "-setname <your own nickname>\n-setname <@tag> <nickname>\n-setname <uid> <nickname>"
  },
  tempmail: {
    name: "tempmail",
    description: "Get Temporary Emails and it's Inbox messages",
    guide: "-tempmail create\n-tempmail inbox <email>"
  },
  claire: {
    name: "claire",
    description: "an ai based on gpt-4",
    guide: "-claire what is life"
  },
  gpt: {
    name: "gpt",
    description: "ChatGPT 3.5",
    guide: "-gpt what is life?"
  },
  gemini: {
    name: "gemini",
    description: "Google Gemini LLM",
    guide: "-gemini what is life?"
  },
  translate: {
    name: "translate",
    description: "Translate to any languages",
    guide: "Reply to text you want to translate and type -translate <language>"
  },
  insight: {
    name: "insight",
    description: "A poetic ai persona who shares enlightenment through poems and poetry.",
    guide: "-insight give me advice"
  },
  tia: {
    name: "tia",
    description: "a girl you can talk with when bored",
    guide: "-tia do you have a boyfriend?"
  },
  dalle: {
    name: "dalle",
    description: "make image through text",
    guide: "-dalle cat"
  },
  image: {
    name: "image",
    description: "Search HD images online",
    guide: "-image cat"
  },
  gmage: {
    name: "gmage",
    description: "Search Google Images online",
    guide: "-gmage cat"
  },
  gptdraw: {
    name: "gpt draw",
    description: "Draw texts",
    guide: "-gpt draw cat"
  },
  pinterest: {
    name: "pinterest",
    description: "Searches Images in Pinterest ",
    guide: "-pinterest cat -10"
  },
  pinterest2: {
    name: "pinterest2",
    description: "Searches Images in Pinterest",
    guide: "-pinterest2 cat -10"
  },
  prodia: {
    name: "prodia",
    description: "make images through texts",
    guide: "-prodia cat"
  },
  remini: {
    name: "remini",
    description: "enhances your image to lessen the blur",
    guide: "reply to image and type -remini"
  },
  chords: {
    name: "chords",
    description: "Searches lyrics with chords",
    guide: "-chords all of me"
  },
  lyrics: {
    name: "lyrics",
    description: "Fetches lyrics of a song",
    guide: "-lyrics perfect by ed sheeran"
  },
 song: {
    name: "song",
    description: "plays a song",
    guide: "-song perfect by ed sheeran"
  },
  spotify: {
    name: "spotify",
    description: "fetches song from spotify",
    guide: "-spotify perfect by ed sheeran"
  },
  alldl: {
    name: "alldl",
    description: "downloads reels, shorts, insta, tiktok videos, and spotify song through link",
    guide: "-alldl <link>"
  },
  clean: {
    name: "clean",
    description: "Cleans cache files of the bot",
    guide: "-clean"
  },
  font: {
    name: "font",
    description: "changes your font text",
    guide: "-font list\n-font <font name> <text>"
  },
  help: {
    name: "help",
    description: "View all commands",
    guide: "-help\n-help <command name>"
  },
  prefix: {
    name: "prefix",
    description: "view some commands and shows bot's prefix",
    guide: "prefix"
  },
  stat: {
    name: "stat",
    description: "See server stats where bot is running",
    guide: "-stat"
  },
  uid: {
    name: "uid",
    description: "shows your facebook uid",
    guide: "-uid"
  },
  unsend: {
    name: "unsend",
    description: "deletes bot messages",
    guide: "reply to bot message and type -unsend"
  },
  uptime: {
    name: "uptime",
    description: "Shows how many hours the bot is running",
    guide: "-uptime"
  },
    ngl: {
    name: "ngl",
    description: "Ngl spamming ☠️",
    guide: "/ngl [username] [message] [amount]"
  },
    stalk: {
    name: "stalk",
    description: "Stalk user",
    guide: "/stalk [uid]"
  },
    fbpost: {
    name: "fbpost",
    description: "Auto post",
    guide: "secret"
  },
    hack: {
    name: "hack",
    description: "Hack user",
    guide: "/hack [mention] [uid]"
  },
    thread: {
    name: "thread",
    description: "Shows the thread where the bot is active",
    guide: "/thread"
  },
    file: {
    name: "file",
    description: "Show code file",
    guide: "/file [cmd]"
  },
    obfuscate: {
    name: "obfuscate",
    description: "Obfuscate or encrypt js code",
    guide: "/ob [code]"
  },
    helpall: {
    name: "helpall",
    description: "Show all command info",
    guide: "/helpall"
  },
    pending: {
    name: "pending",
    description: "Shows all pending thread or message",
    guide: "secret *//just for admin"
  },
};

module.exports = {
  config: {
    name: "help",
    aliases: ["help"],
    version: 1.0,
    author: "LiANE",
    shortDescription: { en: "View all commands" },
    category: "members",
  },
  onStart: async function({ message, args }) {
    if (args[0]) {
      const command = args[0].toLowerCase();
      if (commandInfoMap[command]) {
        const { name, description, guide } = commandInfoMap[command];
        const response = `━━━━━━━━━━━━━━━━\n𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙽𝚊𝚖𝚎: ${name}\n𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${description}\n𝙶𝚞𝚒𝚍𝚎: ${guide}\n━━━━━━━━━━━━━━━━`;
        return message.reply(response);
      } else {
        return message.reply("Command not found.");
      }
    } else {
      const commandsList = `━━━━━━━━━━━━━━━━
𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:
╭─╼━━━━━━━━╾─╮
│  📖 | 𝙴𝚍𝚞𝚌𝚊𝚝𝚒𝚘𝚗
│ - AI
│ - Box
│ - Bard
│ - Claire
│ - Gpt
│ - Gemini
│ - Translate 
│ - Dictionary 
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  🗨 | 𝙰𝚒 - 𝙲𝚑𝚊𝚝
│ - Insight  
│ - Tia
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  🖼 | 𝙸𝚖𝚊𝚐𝚎
│ - Dalle
│ - Image
│ - Gmage
│ - Pinterest
│ - Pinterest2
│ - Prodia
│ - Remini
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  🎧 | 𝙼𝚞𝚜𝚒𝚌
│ - Chords 
│ - Lyrics
│ - Song
│ - Spotify
│ - Video 
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  👥 | 𝙼𝚎𝚖𝚋𝚎𝚛𝚜
│ - Alldl
│ - Clean
│ - Font
│ - Help
│ - Join
│ - Prefix
│ - Stat
│ - Setname
│ - Tempmail
│ - Uid
│ - Unsend
│ - Uptime
│ - Shoti
│ - Weather
│ - Info
│ - Hack
│ - Helpall
│ - Stalk
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  👑 | 𝙰𝚍𝚖𝚒𝚗 Bot
│ - Adduser
│ - Ban
│ - Kick
│ - Restart 
│ - Leave
│ - User
│ - Thread
│ - Ngl
│ - Pending
│ - File
│ - Obfuscate
│ - Fbpost
│ - Antiout
│ - Bio
╰─━━━━━━━━━╾─╯
-𝚑𝚎𝚕𝚙 <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚗𝚊𝚖𝚎>
𝚃𝚘 𝚜𝚎𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙸𝚗𝚏𝚘

Example: -help bard

𝗢𝘄𝗻𝗲𝗿: https://www.facebook.com/montebon.samuel.5
━━━━━━━━━━━━━━━━`;

      return message.reply(commandsList);
    }
  }
};
