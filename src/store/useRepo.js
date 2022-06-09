import { defineStore } from 'pinia'

export const useRepoStore = defineStore('repo', {
  state: () => ({
    repos: [],
    repo: null,
    loading: false,
    error: null
  }),
  getters: {
    allRepos: state => state.repos,
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
    fetchActiveRepo(id) {
      this.repo = this.repos[id]
    }
  },
})
