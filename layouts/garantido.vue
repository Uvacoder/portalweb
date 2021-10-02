<template>
  <div>
    <section
      class="
        bg-garantido bg-cover
        h-screen
        bg-opacity-95 bg-cover
        relative
        filter
        backdrop-saturate-50
        shadow-md
        mx-auto
      "
    >
      <span
        class="
          absolute
          p-20
          bg-gradient-to-t
          from-gray-900
          w-full
          bottom-0
        "
      />
      <span class="absolute bottom-0 left-0">
        <img
          class="w-40"
          src="~/static/red-logo.png"
          alt="brasão do garantido"
        />
      </span>
      <h1
        class="
          absolute
          bottom-0
          right-0
          text-6xl
          font-extrabold
          text-gray-50
        "
      >
        Boi do Povão
      </h1>
    </section>
    <section class="container mx-auto p-6 rounded">
      <div
        class="
          flex
          justify-between
          items-center
          max-w-screen-xl
          mx-auto
        "
      >
        <Menu />
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Category',
};
</script>

<style></style>
