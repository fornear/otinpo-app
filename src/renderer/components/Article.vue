<template>
  <div>
    <el-button @click="$router.go(-1)">戻る</el-button>
    <div>
      <div>{{article.Title}}</div>
      <div>posted by {{article.posted_by}} at {{article.published_at}}</div>
      <VueMarkdown :source="article.Text"></VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
const axios = require('axios')

export default {
  name: 'Article',
  data () {
    return {
      article: {}
    }
  },
  beforeCreate: async function () {
    try {
      let res = await axios.get('https://api.otinpo.site/articles?id=' + this.$route.params.id)
      this.article = res.data[0]
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style scoped>

</style>
