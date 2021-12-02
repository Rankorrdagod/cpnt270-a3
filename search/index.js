require('dotenv').config();

const { google } = require('googleapis');

google.youtube('v3').playlists.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    channelId: 'UC6kvOk8asYpTnu8H9Wst_Gg'
}).then((response)=> {
const { data } = response;
data.items.forEach((item) =>{
    console.log(item.snippet.thumbnails.default)
   // console.log(`title: ${item.snippet.title}\nDescription:${item.snippet.description}\n`);
})

}).catch((err)=> console.log(err));