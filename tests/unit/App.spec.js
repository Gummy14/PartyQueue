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
        topOfQueue: ''
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
  context('loadURL', () => {
    context('when the add to queue button is clicked', () => {
      it('calls the loadURL method', () => {
        sinon.spy(subject, 'loadURL')
        wrapper.find('.add-to-queue').vm.$emit('click')
        expect(subject.loadURL).to.have.been.called
      })
      it('saves the url to the store', () => {
        subject.youtubeURL = 'https://www.youtube.com/watch?v=m6sYFUTDiT4'
        subject.loadURL()
        console.log('store.state.topOfQueue', store.state.topOfQueue)
        expect(store.state.topOfQueue).to.be.equal('https://www.youtube.com/embed/m6sYFUTDiT4?autoplay=1')
      })
    })
  })
})
