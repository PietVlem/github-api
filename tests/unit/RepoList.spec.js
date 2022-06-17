import { mount, RouterLinkStub } from "@vue/test-utils"
import { createTestingPinia } from '@pinia/testing'
import RepoList from '@/components/RepoList.vue'


describe("RepoList.vue", () => {
    test('render repo list', () => {
        const repos = [
            { name: 'repo 1', language: 'javascript' }, 
            { name: 'repo 2', language: 'php' }, 
            { name: 'repo 3', language: 'node.js' }
        ]
        const wrapper = mount(RepoList, {
            global: {
                components: {
                    'router-link': RouterLinkStub
                },
                plugins: [createTestingPinia({
                    initialState: {
                        repo: { repos: repos },
                    },
                })],
            },
        })

        const items = wrapper.findAll('.repo')
        expect(items).toHaveLength(repos.length)
        expect(items[0].find('.folder-name').text()).toContain('repo 1')
        expect(items[0].find('.tag').text()).toContain('javascript')
        expect(items[1].find('.folder-name').text()).toContain('repo 2')
        expect(items[1].find('.tag').text()).toContain('php')
        expect(items[2].find('.folder-name').text()).toContain('repo 3')
        expect(items[2].find('.tag').text()).toContain('node.js')
    })
})