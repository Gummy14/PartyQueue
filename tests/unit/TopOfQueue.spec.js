import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import TopOfQueue from '@/components/TopOfQueue.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TopOfQueue.vue', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        youtubeEmbedLink: 'https://www.youtube.com/embed/zKFzKIa_pIM'
      }
    })
    wrapper = shallowMount(TopOfQueue, { store, localVue })
  })

  it('renders the top of queue component', () => {
    expect(wrapper.find('.embededVideo').exists()).to.be.true
  })
})
