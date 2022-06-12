# github-api

## Url
[Netlify](https://rad-chimera-ee8982.netlify.app)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Used ES6 functions
#### 1. arrow function
Sorting repos
```
sortReposAsc() {
    this.repos.sort((a, b) => b.name.localeCompare(a.name))
}
```

#### 2.Template Literals
To easily customize string
```
this.repo = await fetch(`https://api.github.com/repos/PietVlem/${name}`).then((response) => response.json())
```

#### 3.Spread operator
To combine data (Could have used .concat here aswell...)
```
this.repoCommits = [...this.repoCommits, ...commitsNextPage]
````