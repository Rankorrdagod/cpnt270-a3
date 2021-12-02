require('dotenv').config();

const { google } = require('googleapis');

google.youtube('v3').playlists.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    channelId: 'UC6kvOk8asYpTnu8H9Wst_Gg'
}).then((response)=> {
console.log(response);

}).catch((err)=> console.log(err));