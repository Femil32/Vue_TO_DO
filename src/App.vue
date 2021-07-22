<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
export default {
  components:{NavBar}
}
</script>

<style lang="scss">
*{
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all .2s linear;  
  user-select: none;
}
body{
  background: #e0e0e0;
  &::-webkit-scrollbar{
    display: none; 
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1200px;
  margin:  0 auto;
  color: #555;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

