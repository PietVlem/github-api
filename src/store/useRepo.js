import { defineStore } from 'pinia'

export const useRepoStore = defineStore('repo', {
  state: () => ({
    repos: [],
    repo: null,
    repoCommits: [],
    commitsPerPage: 20,
    searchVal: '',
    loading: false,
    error: null
  }),
  getters: {
    filteredCommits: (state) => state.repoCommits.filter(el => el.commit.message.toLowerCase().includes(state.searchVal.toLowerCase())),
    allCommitsFetched: (state) => {
      let boolean = false
      // if (state.repoCommits.length) boolean = state.repoCommits[state.repoCommits.length - 1].parents.length ? false : true
      if (state.repoCommits.length && !state.repoCommits[state.repoCommits.length - 1].parents.length) boolean = true
      return boolean
    },
    currentCommitsPage: (state) => Math.ceil(state.repoCommits.length / 20)
  },
  actions: {
    async fetchRepos() {
      this.repos = []
      this.loading = true
      try {
        this.repos = await fetch('https://api.github.com/users/PietVlem/repos')
          .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchActiveRepoData(name) {
      this.repo = []
      this.loading = true
      try {
        this.repo = await fetch(`https://api.github.com/repos/PietVlem/${name}`)
          .then((response) => response.json())
        this.repoCommits = await fetch(`https://api.github.com/repos/PietVlem/${name}/commits?per_page=${this.commitsPerPage}`)
          .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchNextCommitsPage(name) {
      this.loading = true
      try {
        const commitsNextPage = await fetch(`https://api.github.com/repos/PietVlem/${name}/commits?per_page=${this.commitsPerPage}&page=${this.currentCommitsPage + 1}`)
          .then((response) => response.json())
        this.repoCommits = [...this.repoCommits, ...commitsNextPage]
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    resetActiveRepo() {
      this.repo = null
      this.repoCommits = []
    },
    sortReposAsc() {
      this.repos.sort((a, b) => a.name.localeCompare(b.name))
    },
    sortReposDesc() {
      this.repos.sort((a, b) => b.name.localeCompare(a.name))
    }
  },
})
