<template>
  <h1 class="text-3xl my-8">Blog Posts</h1>

  I like to write about anything thta I am currently working or something new
  that interests me. If you would like me to write about something or be a guest
  blogger on your blog please reach out to me on Twitter. If you would like to
  subscribe to an RSS feed you can find it here.

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <!-- <Post :posts="posts" /> -->
    <ul>
      <li v-for="post in posts" :key="post._id">
        <a href="#">{{ post.title }}</a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)
</script>

<style lang="scss" scoped></style>
