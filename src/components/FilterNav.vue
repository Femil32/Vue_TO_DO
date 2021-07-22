<template>
    <div class="filter-nav">
        <button @click="updateFilter('all')" :class="{active:current === 'all'}">View All</button>
        <button @click="updateFilter('completed')" :class="{active:current === 'completed'}">Completed</button>
        <button @click="updateFilter('ongoing')" :class="{active:current === 'ongoing'}">Ongoing</button>
    </div>
</template>
<script>
export default {
    props:['current'],
    methods:{
        updateFilter(by){
            this.$emit('filterChange',by)
        }
    }
}
</script>
<style lang="scss">
.filter-nav button {
    background: none;
    border: none;
    color: #999;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    &.active{
        color: #000;
    }
}

</style>