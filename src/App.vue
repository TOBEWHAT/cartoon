<template>
  <div id="app"
       :class="{'darkmode':modeControl}">
    <div id="nav"
         class="nav">
      <router-link to="/">Home</router-link> |
      <!--<router-link to="/about">About</router-link> | -->
      <!--<router-link to="/cartoon">Cartoon</router-link> | -->
      <router-link to="/user/login">Login</router-link> |
      <router-link to="/cartoon/list">CartoonList</router-link>
      <!--<router-link to="/cartoon/detail">CartoonDetail</router-link> -->
    </div>
    <router-view />
    <div class="mode-control">
      <el-switch v-model="modeControl"
                 :width="modeWidth"
                 inactive-text="白天"
                 active-text="黑夜"
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  }
  .mode-control {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav {
  opacity: 0.1;
}
</style>
