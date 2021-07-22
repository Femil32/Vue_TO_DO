<template>
    <div class="project" :class="{'complete':project.complete}">
        <div class="actions">
            <h3 @click="showDetails = !showDetails">{{project.title}}</h3>
            <div class="action-btns">
                <router-link :to="{name:'EditProject' , params:{id: project.id}}">
                    <span class="material-icons edit">edit</span>
                </router-link>
                <span @click="deleteProject" class="material-icons">delete</span>
                <span @click="toggleComplete" class="material-icons tick">done</span>
            </div>
        </div>
        <div class="details">
            <p v-if="showDetails">{{project.details}}</p>
        </div>
    </div>
</template>


<script>
export default {
    name:'SingleProject',
    props:['project'],
    data(){
        return{
            showDetails:false,
            uri:'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods: {
        deleteProject(){
            fetch(this.uri,{method:'DELETE'})
                .then(() => this.$emit('delete',this.project.id))
                .catch(err => console.log(err))
        },
        toggleComplete(){
            fetch(this.uri,{
                method: 'PATCH',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({complete: !this.project.complete})
            }).then(() => {
                this.$emit('complete',this.project.id)
            }).catch(err => console.log(err))
        }
    },
}
</script>


<style lang="scss" scoped>
.project{
    margin: 20px 0;
    padding: 10px 20px;
    border-bottom: 5px solid #e90074;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-radius: 10px 10px 0 0;
    background: #e0e0e0;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
    .actions{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3{
            cursor: pointer;
            flex-grow: 1;
            margin: 10px 0;
        }
        .action-btns{   
            user-select: none;
            .edit{
                color: #555;
            }
            span{
                margin-left: 10px;
                cursor: pointer;
                opacity: .7;
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
    .details{
        p{
            color:#333; 
            margin-bottom: 10px;
        }
    }
}
.project.complete{
    border-color: #00ce89;
    .tick{
        color: #00ce89;
    }
}
</style>