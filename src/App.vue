<template>
  <div id="app">
    <header id="nav" class="header">
      <h1 class="logo">
        <router-link to="/" style="text-decoration-line:initial;">My PORTFOLIO</router-link>
      </h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link>
    </header>
    <router-view/>

  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  width: 100%;
  padding: 60px 0 10px;
  background: url('../public/img/icons/apple-touch-icon-60x60.png') repeat-x;
  box-shadow: 0 0 10px 1px #e3e3e3;
}

.logo {
  width: 250px;
  height: 56px;
  margin: 0 auto;
  text-decoration: none;
}
</style>
