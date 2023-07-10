<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">Hello, I'm Elvis Saavedra!</h1>
    <p class="text-base text-gray-900 p-2 italic">Web Developer</p>
  </section>

  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">My Story</h2>
      <p class="text-lg py-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis
        tenetur tempora accusantium porro adipisci, similique suscipit maxime
        labore. Praesentium laudantium itaque pariatur, quo aliquid eius maiores
        error ullam et?
      </p>
    </div>
    <img
      src="~/assets/images/avatar.png"
      class="w-1/2 md:max-w-sm p-8 mx-auto"
      alt=""
    />
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 mt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog').sort({ date: 'desc' }).limit(3).find()
)
</script>
