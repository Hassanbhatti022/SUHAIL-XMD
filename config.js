const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://pin.it/6ehpQmGaN" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "3";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923318086563";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://pin.it/6ehpQmGaN" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "Everyone";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_33_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgMjQzLFxuICAgICAgICA4LFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwickc5bzh1ZmVtSUpxd1NKL2ZEZzNjOTFGYjk3WDg3TDU4Qmt4MCttOU1Tdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTgwODY1NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZFNEQxNTI5MTlGNzRBNEJDMUI0NjExQkExM0IwQjJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjMxMzYzMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmWWJZTXh5YlJjaU1HTUxib3dQaVd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwMjRmZGFhLWVkNjEtNDYxNC04YzFkLTZmZjAwOTg1MjliOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMzAsXG4gICAgICAzNyxcbiAgICAgIDg0LFxuICAgICAgNyxcbiAgICAgIDU1LFxuICAgICAgMTAxLFxuICAgICAgMTE3LFxuICAgICAgMjA3LFxuICAgICAgMTM0LFxuICAgICAgMTg0LFxuICAgICAgMjE1LFxuICAgICAgMTkyLFxuICAgICAgNjgsXG4gICAgICAzLFxuICAgICAgMTAyLFxuICAgICAgMTk3LFxuICAgICAgMTc4LFxuICAgICAgMTc0LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE0NixcbiAgICAgIDIxOSxcbiAgICAgIDI1MCxcbiAgICAgIDE2MyxcbiAgICAgIDE2NSxcbiAgICAgIDE0OSxcbiAgICAgIDE1MSxcbiAgICAgIDI1MyxcbiAgICAgIDEzMyxcbiAgICAgIDE4LFxuICAgICAgMjI1LFxuICAgICAgMjQ0LFxuICAgICAgMTksXG4gICAgICAyMDgsXG4gICAgICAxMTgsXG4gICAgICAxOTQsXG4gICAgICAyNDUsXG4gICAgICAxMTQsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNTdDWlFCOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE4MDg2NTYzOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqfCdkavwnZGs8J2RqvCdkazwnZG18J2Ru/CThqogICDDlyAgIPCThqnwnZGp8J2RtvCdkoDwk4aqICAgw5cgICDwk4ap8J2QifCdkJjwnZG08JOGqiAgIMOXICAg8JOGqfCdkbPwnZG28J2RvfCdkazwnZG58JOGqiAgIMOXICAg8JOGqfCdkajwnZGz8J2RsPCThqogICDDlyAgIPCThqnwnZGy8J2RsPCdkbXwnZGu8JOGqiAgIDxcIixcbiAgICBcImxpZFwiOiBcIjEwNDEyNzc1NzU3ODM2Njo4MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYUs4TllGRUpYcGxiY0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkF2Z2YrN0ZFQ1ZLOFcvQWp4amRRSktod29xMFVhZEZ0bjl0UzVhQWppMEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidHF3MWFmdlNud1EwdUdaYXVhZ0Vza3BGNVJjWkl6Y3B1YzdMOWFqblZzRUQyN25KQ0huSFZqWDE3Uk1vZXYwcVZ2bVpyV1RlZmNPKyswV0pZMlRlQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaU8vYk9RL0Z3SklFSityYy9BdkhVc2NaMUhzdThwUks4cHYzcXJNK0IxSXhKT0hLTWdvU2NDeXUwaCtmYXhkTXFRSXA2RHl2V3doQktSTzJvMDZKQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE4MDg2NTYzOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYzMTM2MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFORTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5FOS5qc29uIjogIntcImtleURhdGFcIjpcIkt4NGc0SVZBWGFJSTVYOXBKUXBYVGMyTk43N2tpS1k2T2FCWmwwZDExTUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUyNDM2ODY5MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ALI-KING",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
