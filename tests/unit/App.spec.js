import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'
import sinon from 'sinon'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('App.vue', () => {
  let wrapper
  let store
  let subject

  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
    wrapper = shallowMount(App, { store, localVue })
    subject = wrapper.vm
  })

  context('template', () => {
    it('renders toolbar component', () => {
      expect(wrapper.find('.toolbar').exists()).to.be.true
    })
    it('renders home component', () => {
      expect(wrapper.find('.home').exists()).to.be.true
    })
  })
  context('getUrl', () => {
    context('when the add to queue button is clicked', () => {
      beforeEach(done => {
        sinon.spy(subject.getUrl)
        wrapper.find('.add-to-queue').trigger('click')
        subject.$nextTick(done)
      })
      it.skip('calls the getUrl method', () => {
        expect(subject.getUrl).to.be.called
      })
    })
  })
})
