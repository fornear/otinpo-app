<template>
  <div>
    <div v-for="article of reverseArticles" :key="article.id">
      <router-link :to="'/blog/'+article.id">{{article.Title}} posted by {{article.posted_by}} at {{article.published_at}}</router-link>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
const apiUrl = 'https://api.otinpo.site/articles'

export default {
  name: 'Blog',
  data () {
    return {
      articles: []
    }
  },
  computed: {
    reverseArticles: function () {
      return this.articles.slice().reverse()
    }
  },
  beforeCreate: async function () {
    try {
      const res = await axios.get(apiUrl)
      const articles = res.data
      this.articles = articles
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>

</style>
