<template>
  <div>
    <pre>
      {{ post }}
    </pre>
  </div>
</template>
<script>
export default {
  name: 'Content',
  // async asyncData({ params, $axios, store }) {
  //   const post = await $axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  //   );
  //   return { ...JSON.parse(post) };
  // },

  data() {
    return {
      post: [],
    };
  },
  async fetch() {
    const result = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`,
    );
    this.post = result.data;
  },

  head() {
    return {
      title: this.post.title ? this.post.title : '',
      meta: [
        {
          hid: 'Boi caprichoso o Boi de parintins',
          name: 'Boi caprichoso o Boi de parintins',
          content: this.post.body ? this.post.body : '',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    };
  },
};
</script>
