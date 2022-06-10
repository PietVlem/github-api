import { defineStore } from 'pinia'

export const useRepoStore = defineStore('repo', {
  state: () => ({
    repos: [],
    repo: null,
    repoCommits: [],
    loading: false,
    error: null
  }),
  getters: {},
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
        this.repoCommits = await fetch(`https://api.github.com/repos/PietVlem/${name}/commits?per_page=20`)
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
