import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/components/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
    wrapper = shallowMount(Home, { store, localVue })
  })

  it('renders top of queue component', () => {
    expect(wrapper.find('.top-of-queue').exists()).to.be.true
  })
})
