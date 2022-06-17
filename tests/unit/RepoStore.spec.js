// counterStore.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useRepoStore } from '@/store/useRepo'
const array = ['']

describe('Counter Store', () => {
    const repos = [{ name: 'repo 2' }, { name: 'repo 3' }, { name: 'repo 1' }]
    const commits = [{ name: 'commit 2' }, { name: 'commit 3' }, { name: 'commit 1' }]

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('resetActiveRepo', () => {
        const repoStore = useRepoStore()
        repoStore.repo = repos[0]
        repoStore.repoCommits = commits
        repoStore.resetActiveRepo()
        expect(repoStore.repo).toStrictEqual(null)
        expect(repoStore.repoCommits).toStrictEqual([])
    })

    it('sortReposAsc', () => {
        const repoStore = useRepoStore()
        repoStore.repos = repos
        repoStore.sortReposAsc()
        expect(repoStore.repos).toStrictEqual([{ name: 'repo 1' }, { name: 'repo 2' }, { name: 'repo 3' }])
    })

    it('sortReposDesc', () => {
        const repoStore = useRepoStore()
        repoStore.repos = repos
        repoStore.sortReposDesc()
        expect(repoStore.repos).toStrictEqual([{ name: 'repo 3' }, { name: 'repo 2' }, { name: 'repo 1' }])
    })
})