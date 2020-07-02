<template>
  <div id="app"
       :class="{'darkmode':modeControl}">
    <div id="nav"
         class="nav">
         <div class="navbar">
            <router-link to="/">Home</router-link>
            <router-link to="/cartoon/list">Catalog</router-link>
            <router-link to="/user/login">SingIn</router-link>
         </div>
    </div>
    <router-view />
    <div class="mode-control">
      <el-switch v-model="modeControl"
                 :width="modeWidth"
                 inactive-text="Day"
                 active-text="Night"
                 active-color="#2485b2"
                 inactive-color="#bc340a">
      </el-switch>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modeControl: false,
      modeWidth: 40
    }
  },
  methods: {

  }

}
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
body {
  position: relative;
}
#app {
  font-family:sans-serif, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  &.darkmode {
    background-color: #000;
    .navbar{
      a{
        color: #fff;
        &.router-link-active {
          color: #cf9236;
        }
      }
    }
  }
  .mode-control {
    position: fixed;
    bottom: 20px;
    right: 50px;
  }
}


#nav {
  margin-bottom: 18px;
  border-width: 10px 0 0;
  border-top-style: solid;
  text-align: right;
  -o-border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #ef6e6e) 3;
    border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #ef6e6e) 3;
  .navbar{
    line-height: 1;
    padding: 19px 32px;
    a {
      margin-left: 18px;
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        color: #cf9236;
      }
      &:hover{
        color: #cf9236;
      }
    }
  }
  
}

</style>
