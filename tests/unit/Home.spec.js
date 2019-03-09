import { expect } from 'chai'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/components/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let wrapper
  let store
  let subject

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        queue: [{
          title: 'Lorde - Tennis Court',
          url: 'https://www.youtube.com/embed/D8Ymd-OCucs?autoplay=1'
        },
        {
          title: 'Zac Brown Band - From Now On (Official Lyric Video)',
          url: 'https://www.youtube.com/watch?v=KD_JMQI-4Xw'
        },
        {
          title: 'Ed Sheeran - Galway Girl [Official Lyric Video]',
          url: 'https://www.youtube.com/watch?v=XjHr-6Zl5P8'
        }]
      }
    })
    wrapper = shallowMount(Home, { store, localVue })
    subject = wrapper.vm
  })

  describe('template', () => {
    context('top of queue component', () => {
      it('renders top of queue component', () => {
        expect(wrapper.find('.top-of-queue').exists()).to.be.true
      })
    })
    context('queue list component', () => {
      it('renders the queue list', () => {
        expect(wrapper.find('.queue-list').exists()).to.be.true
      })
    })
  })
  describe('computed', () => {
    context('topOfQueue', () => {
      context('queue is not empty', () => {
        it('returns the first element of the queue', () => {
          expect(subject.topOfQueue).to.deep.equal({
            title: 'Lorde - Tennis Court',
            url: 'https://www.youtube.com/embed/D8Ymd-OCucs?autoplay=1'
          })
        })
      })
      context('queue is empty', () => {
        it('returns an empty string', () => {
          store.state.queue = []
          expect(subject.topOfQueue).to.be.equal('')
        })
      })
    })
    context('queueWithoutTop', () => {
      it('returns every element after the first one', () => {
        expect(subject.queueWithoutTop).to.deep.equal([{
          title: 'Zac Brown Band - From Now On (Official Lyric Video)',
          url: 'https://www.youtube.com/watch?v=KD_JMQI-4Xw'
        },
        {
          title: 'Ed Sheeran - Galway Girl [Official Lyric Video]',
          url: 'https://www.youtube.com/watch?v=XjHr-6Zl5P8'
        }])
      })
    })
  })
})
