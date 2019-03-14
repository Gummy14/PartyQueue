import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchResults from '@/components/SearchResults.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SearchResults.vue', () => {
  let wrapper
  let store
  let subject

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        queue: [
          {
            "videoId":"jLisufZwE74",
            "title":"Breaking Benjamin - Tourniquet",
            "thumbnail":"https://i.ytimg.com/vi/jLisufZwE74/hqdefault.jpg"
          },
          {
            "videoId":"L3wKzyIN1yk",
            "title":"Rag&#39;n&#39;Bone Man - Human (Official Video)",
            "thumbnail":"https://i.ytimg.com/vi/L3wKzyIN1yk/hqdefault.jpg"
          },
          {
            "videoId":"VbrEsOLu75c",
            "title":"21 Savage - A Lot (Official Audio)",
            "thumbnail":"https://i.ytimg.com/vi/VbrEsOLu75c/hqdefault.jpg"
          },
          {
            "videoId":"tu98jDiKRaY",
            "title":"Rain",
            "thumbnail":"https://i.ytimg.com/vi/tu98jDiKRaY/hqdefault.jpg"
          }],
        searchResults: [
          {"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/I_IF3SLEU6csoawBsBa1S1D12KU\"","id":{"kind":"youtube#video","videoId":"DWaB4PXCwFU"},"snippet":{"publishedAt":"2007-05-12T08:17:02.000Z","channelId":"UCpPwodiYc4ceaqEBB54trHQ","title":"Breaking Benjamin - The Diary of Jane","description":"Breaking Benjamin latest album DARK BEFORE DAWN featuring the singles “Failure,” “Angels Fall,” and “Ashes of Eden” is available now!","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/DWaB4PXCwFU/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/DWaB4PXCwFU/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/DWaB4PXCwFU/hqdefault.jpg","width":480,"height":360}},"channelTitle":"HollywoodRecordsVEVO","liveBroadcastContent":"none"}},
          {"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/BRsvyU2TjZZbYfGE7FhUrKkclEQ\"","id":{"kind":"youtube#video","videoId":"rTiGlNDnOtE"},"snippet":{"publishedAt":"2006-10-23T21:31:08.000Z","channelId":"UC6DIIQwAGMjelJ4OJ_s1jIw","title":"Breaking Benjamin - So Cold","description":"Artist: Breaking Benjamin Title: So Cold Album: We're Not Alone Here Label: Hollywood Records Lyrics: Crowded streets all cleared away One by One Hollow ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/rTiGlNDnOtE/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/rTiGlNDnOtE/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/rTiGlNDnOtE/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Marcel Schalk","liveBroadcastContent":"none"}},
          {"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/d_qS_3TS9KQ1giAxJDAavl19oxk\"","id":{"kind":"youtube#video","videoId":"jLisufZwE74"},"snippet":{"publishedAt":"2018-12-14T05:00:07.000Z","channelId":"UCzsKCFGWpOk9gxkOjORRkZw","title":"Breaking Benjamin - Tourniquet","description":"EMBER is available here: Download: http://hollywoodrecs.co/EmberDL Streaming: http://hollywoodrecs.co/EmberWS Follow Breaking Benjamin: Facebook: ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/jLisufZwE74/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/jLisufZwE74/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/jLisufZwE74/hqdefault.jpg","width":480,"height":360}},"channelTitle":"BreakingBenjaminVEVO","liveBroadcastContent":"none"}},
          {"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/jnLel-SAc9QxUnd73cjMgORc5ag\"","id":{"kind":"youtube#video","videoId":"7qrRzNidzIc"},"snippet":{"publishedAt":"2010-12-10T18:26:37.000Z","channelId":"UCzsKCFGWpOk9gxkOjORRkZw","title":"Breaking Benjamin - I Will Not Bow (Official Video)","description":"Check out the official music video for \"I Will Not Bow\" by Breaking Benjamin Breaking Benjamin latest album DARK BEFORE DAWN featuring the singles ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/7qrRzNidzIc/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/7qrRzNidzIc/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/7qrRzNidzIc/hqdefault.jpg","width":480,"height":360}},"channelTitle":"BreakingBenjaminVEVO","liveBroadcastContent":"none"}},
          {"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/4z6rz6VoUh-DrF5NJOoAJqvcrEQ\"","id":{"kind":"youtube#video","videoId":"ztJirkY5AMw"},"snippet":{"publishedAt":"2009-09-26T15:09:57.000Z","channelId":"UCzzndWuovWfKb1ng1Yaxp_g","title":"Breaking Benjamin - What Lies Beneath (Lyrics on screen)","description":"What lies beneath 2009 full song from the 4th album \" dear agony \" by breaking benjamin... the 2nd single song by breaking benjamin, it will be in stores on ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/ztJirkY5AMw/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/ztJirkY5AMw/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/ztJirkY5AMw/hqdefault.jpg","width":480,"height":360}},"channelTitle":"BreakingBenjaminOFCL","liveBroadcastContent":"none"}}
        ]
      },
      mutations: {
        setQueue (state, payload) {
          state.queue = payload.Queue
        }
      },
      getters: {
        getQueue (state) {
          return state.queue
        }
      }
    })
    wrapper = shallowMount(SearchResults, { store, localVue })
    subject = wrapper.vm
  })

  describe('template', () => {
    it('renders all the search results', () => {
      expect(wrapper.findAll({name: 'v-card'}).length).to.equal(5)
    })
    it('renders the title of the video', () => {
      expect(wrapper.findAll('#title').wrappers[0].text()).to.equal('Breaking Benjamin - The Diary of Jane')
      expect(wrapper.findAll('#title').wrappers[1].text()).to.equal('Breaking Benjamin - So Cold')
      expect(wrapper.findAll('#title').wrappers[2].text()).to.equal('Breaking Benjamin - Tourniquet')
      expect(wrapper.findAll('#title').wrappers[3].text()).to.equal('Breaking Benjamin - I Will Not Bow (Official Video)')
      expect(wrapper.findAll('#title').wrappers[4].text()).to.equal('Breaking Benjamin - What Lies Beneath (Lyrics on screen)')
    })
  })
  describe('methods', () => {
    context('addVideoToQueue', () => {
      it('adds the video to the queue', () => {
        var video = {"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/4z6rz6VoUh-DrF5NJOoAJqvcrEQ\"","id":{"kind":"youtube#video","videoId":"ztJirkY5AMw"},"snippet":{"publishedAt":"2009-09-26T15:09:57.000Z","channelId":"UCzzndWuovWfKb1ng1Yaxp_g","title":"Breaking Benjamin - What Lies Beneath (Lyrics on screen)","description":"What lies beneath 2009 full song from the 4th album \" dear agony \" by breaking benjamin... the 2nd single song by breaking benjamin, it will be in stores on ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/ztJirkY5AMw/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/ztJirkY5AMw/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/ztJirkY5AMw/hqdefault.jpg","width":480,"height":360}},"channelTitle":"BreakingBenjaminOFCL","liveBroadcastContent":"none"}}
        subject.addVideoToQueue(video)
        expect(store.state.queue).to.deep.equal([
          {
            "videoId":"jLisufZwE74",
            "title":"Breaking Benjamin - Tourniquet",
            "thumbnail":"https://i.ytimg.com/vi/jLisufZwE74/hqdefault.jpg"
          },
          {
            "videoId":"L3wKzyIN1yk",
            "title":"Rag&#39;n&#39;Bone Man - Human (Official Video)",
            "thumbnail":"https://i.ytimg.com/vi/L3wKzyIN1yk/hqdefault.jpg"
          },
          {
            "videoId":"VbrEsOLu75c",
            "title":"21 Savage - A Lot (Official Audio)",
            "thumbnail":"https://i.ytimg.com/vi/VbrEsOLu75c/hqdefault.jpg"
          },
          {
            "videoId":"tu98jDiKRaY",
            "title":"Rain",
            "thumbnail":"https://i.ytimg.com/vi/tu98jDiKRaY/hqdefault.jpg"
          },
          {
            "videoId":"ztJirkY5AMw",
            "title":"Breaking Benjamin - What Lies Beneath (Lyrics on screen)",
            "thumbnail":"https://i.ytimg.com/vi/ztJirkY5AMw/hqdefault.jpg"
          }]
        )
      })
    })
  })
})
