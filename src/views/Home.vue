<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"/>
    <div v-if="projects.length" class="projects">
      <div v-for="project in filterProjects" :key="project.id" class="project">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
    <div v-else class="loading">
      <img src="@/img/svg/loading.svg" alt="svg">
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  components: {SingleProject,FilterNav},
  data(){
    return{
      projects:[],
      current:'all'
    }
  },
  methods:{
    handleDelete(id){
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    handleComplete(id){
      let p = this.projects.find((project) => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  },
  computed:{
    filterProjects(){
      if(this.current === "completed"){
        return this.projects.filter(project => project.complete)
      }else if(this.current === "ongoing"){
        return this.projects.filter(project => !project.complete)
      }else{
        return this.projects
      }
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss" scoped>
.projects{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 2rem;

}
.loading{
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100px;
  }
}
</style>


