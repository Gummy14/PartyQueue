import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import TopOfQueue from '@/components/TopOfQueue.vue'

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
    wrapper = shallowMount(TopOfQueue, { store, localVue })
    subject = wrapper.vm
  })

  context('template', () => {
    beforeEach(() => {
      subject.topOfQueue = {
        title: 'Lorde - Tennis Court',
        url: 'https://www.youtube.com/embed/D8Ymd-OCucs?autoplay=1'
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
  })
})
