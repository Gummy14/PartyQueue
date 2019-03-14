let axios = require('axios')
let BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

module.exports = function (options, callback) {
  if(!options.apiKey) {
    throw new Error('YouTube API Key Required')
  }  
  axios.get(BASE_URL, { 
    params: {
      part: 'snippet',
      key: options.apiKey,
      q: options.searchQuery,
      type: 'video'
    } 
  })
  .then(response => {
    if(callback) {
      callback(response.data.items)
    }
  })
  .catch(error => {
    console.log(error)
  })
}