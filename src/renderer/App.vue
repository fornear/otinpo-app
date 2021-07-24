<template>
  <div id="app">
    <el-container class="app-content">
      <el-aside class="left-side-menu" width="200px">
        <LeftSideMenu></LeftSideMenu>
      </el-aside>
      <el-container>
        <el-header>
          <h1></h1>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftSideMenu from './components/LeftSideMenu'

export default {
  name: 'otinpo-app',
  components: {
    LeftSideMenu
  }
}
</script>

<style>
.app-content {
  height: 100%;
}
.title {
  padding: 5px;
}
</style>
