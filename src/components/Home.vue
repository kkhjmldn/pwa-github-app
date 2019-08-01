<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" name="username" v-model="username" />
    <button @click="getUserData">Search</button>
    
    <div v-if="user !== null" class="profile">
      <img v-bind:src="user.avatar_url"  width="200" height="200"> <br />
      <label>Username : {{user.login}}</label> <br />
      <label>Profile Name : {{user.name}}</label> <br /> 
      <label>Profile Bio : {{user.bio}}</label> <br />
    </div>
  </div>
</template>

<script>

import GithubService from '@/services/GithubService'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Get Github User Information',
      username: '',
      user: null
    }
  },
  methods: {
    async getUserData () {
      this.user = null
      // eslint-disable-next-line no-unused-vars
      const result = await GithubService.searchUser({
        username: this.username
      }).then(response => {
        this.user = response.data
      }).catch(error => {
        console.log(error)
      })

      if (this.user !== null) {
        console.log(this.user)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

input {
  width :40%;
  padding : 12px 20px;
  margin : 8px 0;
  display : inline-block;
  border : 1px solid #ccc;
  border-radius : 4px;
  box-sizing : border-box;
}

button {
  background-color : #4CAF50;
  border : none;
  color : white;
  padding : 15px 32px;
  text-align : center;
  display : inline-block;
  text-decoratio :none;
  font-size :16px;
}

.profile {
  padding :16px
}

label {
  font-size:20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
