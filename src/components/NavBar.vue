<template>
    <nav class="main-nav">
        <router-link :to="{name:'Home'}">Projects</router-link>
        <router-link :to="{name:'AddProjects'}">Add a new Project</router-link>
    </nav>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
<style lang="scss" scoped>
.main-nav {
    text-align: center;
    margin: 40px auto;
    a{
        display: inline-block;
        text-decoration: none;
        margin: 0 10px;
        color: #999;
        font-size: 18px;
        &.router-link-active {
            border-bottom: 2px solid #00ce89;
            padding-bottom: 4px;
            color: #e90074;
        }
    }
}

  
</style>