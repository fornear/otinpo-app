<template>
  <div>
    <div class="title left-side-title">Otinpo</div>
    <el-menu>
      <router-link to="/">
        <el-menu-item>Home</el-menu-item>
      </router-link>
      <router-link to="/blog">
        <el-menu-item>Blog</el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LeftSideMenu',
  methods: {
  }
}
</script>

<style scoped>
.left-side-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
