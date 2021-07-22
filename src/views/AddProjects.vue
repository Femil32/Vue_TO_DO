<template>
    <h3 class="title">Add New <span>PROJECT</span></h3>
    <form @submit.prevent="handleSubmit">
        <label>Title</label>
        <input type="text" v-model="title" required>
        <label>Details</label>
        <textarea v-model="details" required></textarea>
        <button>Add Project</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: ''
    }
  },
  methods: {
    handleSubmit() {
        let project = {
            title: this.title,
            details: this.details,
            complete:false
        }
        fetch('http://localhost:3000/projects',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(project)
        }).then(() => {
            this.$router.push('/')
        }).catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
*{
    transition: all .2s linear;
}
.title{
    margin-bottom:25px;
    span{
        color: lightcoral;
        text-decoration: underline;
        text-decoration-style: dotted;
        text-decoration-color: black;
    }
}
form {
    background: #e0e0e0;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
    padding: 20px;
    border-radius: 10px;
    label {
        display: block;
        color: #00ce89;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 20px 0 10px 0
    }
}

input {
    padding: 10px;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border-bottom: 2px solid transparent;
    outline: none;
    &:focus{
        border-bottom: 2px solid lightsalmon;
    }
}
textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
    resize: vertical;
    outline: none;
    border-radius: 10px;
    border-bottom: 2px solid transparent;
    &:focus{
    border-bottom: 2px solid lightsalmon;
    }
}
form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    opacity: .8;
    &:hover{
        opacity: 1;
    }
}
</style>