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
    it('renders nav drawer component', () => {
      expect(wrapper.find('.nav-drawer').exists()).to.be.true
    })
    it('renders toolbar component', () => {
      expect(wrapper.find('.toolbar').exists()).to.be.true
    })
    it('renders add to queue component', () => {
      expect(wrapper.find('.add-to-queue').exists()).to.be.true
    })
    it('renders home component', () => {
      expect(wrapper.find('.home').exists()).to.be.true
    })
    context('search button is clicked', () => {
      it('calls search method', () => {
        sinon.spy(subject, 'search')
        wrapper.find('.add-to-queue').vm.$emit('click')
        expect(subject.search).to.have.been.called
      })
    })
  })
})
