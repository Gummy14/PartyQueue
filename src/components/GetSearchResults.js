let axios = require('axios')
let BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default function (options, callback) {
  var self = this
  if(!options.apiKey) {
    throw new Error('YouTube API Key Required')
  }  
  axios.get(BASE_URL, { 
    params: {
      part: 'id, snippet',
      key: options.apiKey,
      q: options.searchQuery,
      type: 'video',
      videoCategoryId: 10,
      fields: 'items(id/videoId,snippet(thumbnails/high/url,title))'
    } 
  })
  .then(response => {
    if(callback) {
      callback(response.data.items)
    }
  })
  .catch(error => {
    console.log(error)
    var keyList = self.$store.getters.getApiKeyList
    var newPosition = self.$store.getters.getApiKeyPosition
    if (newPosition === 2) {
      newPosition = 0
    } else {
      newPosition++
    }
    self.$store.commit('setApiKey', {
      ApiKey: keyList[newPosition]
    })
    self.$store.commit('setApiKeyPosition', {
      ApiKeyPosition: newPosition
    })
  })
}