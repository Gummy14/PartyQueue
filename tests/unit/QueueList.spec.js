import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import QueueList from '@/components/QueueList.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('QueueList.vue', () => {
  let wrapper
  let store
  let subject

  beforeEach(() => {
    wrapper = shallowMount(QueueList, { store, localVue })
    subject = wrapper.vm
  })

  describe('template', () => {
    beforeEach(() => {
      subject.queue = [{
        title: 'Zac Brown Band - From Now On (Official Lyric Video)',
        url: 'https://www.youtube.com/watch?v=KD_JMQI-4Xw'
      },
      {
        title: 'Ed Sheeran - Galway Girl [Official Lyric Video]',
        url: 'https://www.youtube.com/watch?v=XjHr-6Zl5P8'
      }]
    })
    it('renders all the videos in the queue', () => {
      expect(wrapper.findAll({name: 'v-card'}).length).to.equal(2)
    })
    it('renders the title of the video', () => {
      expect(wrapper.findAll('#title').wrappers[0].text()).to.equal('Zac Brown Band - From Now On (Official Lyric Video)')
      expect(wrapper.findAll('#title').wrappers[1].text()).to.equal('Ed Sheeran - Galway Girl [Official Lyric Video]')
    })
  })
})
