let axios = require('axios')
let BASE_URL = 'https://www.googleapis.com/youtube/v3/videos'

module.exports = function (options, callback) {
  if(!options.apiKey) {
    throw new Error('YouTube API Key Required')
  }  
  axios.get(BASE_URL, { 
    params: {
      part: 'snippet',
      key: options.apiKey,
      id: options.videoId,
      fields: 'items/snippet/title'
    } 
  })
  .then(response => {
    if(callback) {
      callback(response.data.items[0].snippet.title)
    }
  })
  .catch(error => {
    console.log(error)
  })
}