// counterStore.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useRepoStore } from '@/store/useRepo'

describe('Counter Store', () => {
    const repos = [{ name: 'repo 2' }, { name: 'repo 3' }, { name: 'repo 1' }]
    const commits = [
        { commit: { message: 'commit 1' }, parents: [{ sha: '123' }] },
        { commit: { message: 'commit 2' }, parents: [{ sha: '456' }] },
        { commit: { message: 'commit 3' }, parents: [] },
    ]

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('filteredCommits', () => {
        const repoStore = useRepoStore()
        repoStore.repoCommits = commits
        repoStore.searchVal = 'Commit 2'
        expect(repoStore.filteredCommits).toStrictEqual([{ commit: { message: 'commit 2' }, parents: [{ sha: '456' }] },])
    })

    it('allCommitsFetched', () => {
        const repoStore = useRepoStore()
        repoStore.repoCommits = commits
        expect(repoStore.allCommitsFetched).toStrictEqual(true)
    })

    it('currentCommitsPage', () => {
        const repoStore = useRepoStore()
        repoStore.repoCommits = commits
        expect(repoStore.currentCommitsPage).toStrictEqual(1)
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