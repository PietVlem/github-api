import { mount } from "@vue/test-utils"
import { createTestingPinia } from '@pinia/testing'
import DetailsView from '@/views/DetailsView.vue'
import CommitListRow from '@/components/CommitListRow.vue'
import { useRouter, useRoute } from 'vue-router'

jest.mock('vue-router', () => ({
    useRoute: jest.fn(),
    useRouter: jest.fn(() => ({
        push: () => { }
    }))
}))

describe('CommitListRow', () => {
    test('displays commits', () => {
        const commits = [
            { commit: { message: 'commit 1', author: { name: 'Pieter', date: '2021-11-06T16:59:03Z' } } },
            { commit: { message: 'commit 2', author: { name: 'Pieter', date: '2021-11-06T16:59:03Z' } } },
            { commit: { message: 'commit 3', author: { name: 'Pieter', date: '2021-11-06T16:59:03Z' } } },
        ]
        useRoute.mockImplementationOnce(() => ({
            params: {
                id: 1
            }
        }))

        const push = jest.fn()
        useRouter.mockImplementationOnce(() => ({
            push
        }))


        const wrapper = mount(DetailsView, {
            global: {
                stubs: ["router-link", "router-view"],
                plugins: [createTestingPinia({
                    initialState: {
                        repo: { 
                            repo: { name: 'repo 1' },
                            repoCommits: commits 
                        },
                    },
                })],
            }
        })

        const items = wrapper.findAllComponents(CommitListRow)
        expect(items).toHaveLength(commits.length)
    })
})