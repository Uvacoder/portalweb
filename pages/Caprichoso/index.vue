<template>
  <div>
    <h1>Página com conteudo do Caprichoso</h1>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="(post, index) of posts" :key="index">
          {{ post.title }}
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Caprichoso',
  layout: 'caprichoso',
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    const result = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    this.posts = result.data;
  },
  head() {
    return {
      title: 'Boi Bumbá Caprichoso o Boi de Parintins',
      meta: [
        {
          hid: 'description',
          name: 'Boi bumbá caprichosos',
          content: 'Boi Caprichoso',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    };
  },
};
</script>

<style></style>
