import { mount } from '@vue/test-utils'
import CommitListRow from '@/components/CommitListRow.vue'

describe('CommitListRow', () => {
  test('displays message', () => {
    const wrapper = mount(CommitListRow, {
      propsData: {
        icon: '🚀',
        text: 'Dit is text',
        classes: 'text-cyan-600',
        meta: 'Dit is meta'
      }
    })

    expect(wrapper.find('.commit__icon').text()).toContain('🚀')
    expect(wrapper.find('.commit__info p').text()).toContain('Dit is text')
    expect(wrapper.find('.meta').text()).toContain('Dit is meta')
    expect(wrapper.find('.commit').classes()).toContain('text-cyan-600')
  })
})
