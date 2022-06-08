import { defineStore } from 'pinia'

export const useGithubApiStore = defineStore('github', {
  state: () => ({ 
    posts: [],
  }),
  getters: {
    allPosts: state => state.posts,
  },
  actions: {
    async getPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          this.posts = json
        });
    }
  },
})
