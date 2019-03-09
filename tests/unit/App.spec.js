import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'
import sinon from 'sinon'

var chai = require("chai");
var sinonChai = require("sinon-chai");
const localVue = createLocalVue()

chai.use(sinonChai);
localVue.use(Vuex)

describe('App.vue', () => {
  let wrapper
  let store
  let subject

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        apiKey: 'AIzaSyDB-sUiK5Ya_g40zT-ttN_r76OyXSfdlf4',
        queue: []
      },
      mutations: {
        setQueue (state, payload) {
          state.queue = payload.Queue
        }
      },
      getters: {
        getApiKey (state) {
          return state.apiKey
        },
        getQueue (state) {
          return state.queue
        }
      }
    })
    wrapper = shallowMount(App, { store, localVue })
    subject = wrapper.vm
  })

  describe('template', () => {
    it('renders toolbar component', () => {
      expect(wrapper.find('.toolbar').exists()).to.be.true
    })
    it('renders add to queue component', () => {
      expect(wrapper.find('.add-to-queue').exists()).to.be.true
    })
    it('renders home component', () => {
      expect(wrapper.find('.home').exists()).to.be.true
    })
  })
  context('when the add to queue button is clicked', () => {
    it('calls the addVideoToQueue method', () => {
      sinon.spy(subject, 'addVideoToQueue')
      wrapper.find('.add-to-queue').vm.$emit('click')
      expect(subject.addVideoToQueue).to.have.been.called
    })
    context.skip('queue is empty', () => {
      it('adds the video object to the queue with autoplay', () => {
        subject.youtubeURL = 'https://www.youtube.com/watch?v=D8Ymd-OCucs'
        subject.addVideoToQueue()
        expect(store.state.queue).to.deep.equal([{
            title: 'Lorde - Tennis Court',
            url: 'https://www.youtube.com/embed/D8Ymd-OCucs?autoplay=1'
        }])
      })
    })
    context.skip('queue is not empty', () => {
      it('adds the object to the queue without autoplay', () => {
        store.state.queue = [{
          title: 'Lorde - Tennis Court',
          url: 'https://www.youtube.com/embed/D8Ymd-OCucs?autoplay=1'
        }]
        subject.queue = [{
          title: 'Lorde - Tennis Court',
          url: 'https://www.youtube.com/embed/D8Ymd-OCucs?autoplay=1'
        }]
        subject.youtubeURL = 'https://www.youtube.com/watch?v=KD_JMQI-4Xw'
        subject.addVideoToQueue()
        expect(store.state.queue).to.deep.equal([{
          title: 'Lorde - Tennis Court',
          url: 'https://www.youtube.com/embed/D8Ymd-OCucs?autoplay=1'
        },
        {
          title: 'Zac Brown Band - From Now On (Official Lyric Video)',
          url: 'https://www.youtube.com/embed/KD_JMQI-4Xw'
        }])
      })
    })
  })
})
