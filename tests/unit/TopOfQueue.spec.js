import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import TopOfQueue from '@/components/TopOfQueue.vue'
import sinon from 'sinon'

var chai = require("chai");
var sinonChai = require("sinon-chai");
const localVue = createLocalVue()

chai.use(sinonChai);
localVue.use(Vuex)

describe('TopOfQueue.vue', () => {
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
    wrapper = shallowMount(TopOfQueue, { store, localVue })
    subject = wrapper.vm
  })

  context('template', () => {
    beforeEach(() => {
      subject.topOfQueue = {
        title: 'Lorde - Tennis Court',
        url: 'https://www.youtube.com/embed/D8Ymd-OCucs',
        videoId: 'D8Ymd-OCucs'
      }
    })
    it('renders the top of queue component', () => {
      expect(wrapper.find('.embededVideo').exists()).to.be.true
    })
    it('renders the title of the video', () => {
      expect(wrapper.find('#title').text()).to.equal('Lorde - Tennis Court')
    })
    it('renders the name of the user who queued the video', () => {
      expect(wrapper.find('#queued-by').text()).to.equal('QUEUED BY:')
    })
    context.skip('video has ended', () => {
      it('calls removeFromTopOfQueue', () => {
        subject.topOfQueue = {
          title: 'Lorde - Tennis Court',
          url: 'https://www.youtube.com/embed/D8Ymd-OCucs',
          videoId: 'D8Ymd-OCucs'
        }
        sinon.spy(subject, 'removeFromTopOfQueue')
        wrapper.find('.embededVideo').vm.$emit('ended')
        expect(subject.removeFromTopOfQueue).to.have.been.called
      })
    })
  })
  context.skip('removeFromTopOfQueue', () => {
    it('removes the first item from the queue', () => {
      store.state.queue = [{
        title: 'Lorde - Tennis Court',
        url: 'https://www.youtube.com/embed/D8Ymd-OCucs',
        videoId: 'D8Ymd-OCucs'
      },
      {
        title: 'Red Cold Rover',
        url: 'https://www.youtube.com/embed/3DGdtKWLNaA',
        videoId: '3DGdtKWLNaA'
      }]
      subject.removeFromTopOfQueue
      expect(store.state.queue).to.deep.equal([{
        title: 'Red Cold Rover',
        url: 'https://www.youtube.com/embed/3DGdtKWLNaA',
        videoId: '3DGdtKWLNaA'
      }])
    })
  })
})
