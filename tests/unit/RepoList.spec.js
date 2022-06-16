import { mount, RouterLinkStub } from "@vue/test-utils"
import { createTestingPinia } from '@pinia/testing'
import RepoList from '@/components/RepoList.vue'
import { useRepoStore } from '@/store/useRepo'


describe("RepoList.vue", () => {
    test('render repo list', () => {
        const repos = [{ name: 1 }, { name: 2 }, { name: 3 }]
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
    })
})