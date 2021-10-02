<template>
  <div>
    <section
      class="
        bg-caprichoso bg-center
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
      <span class="absolute bottom-0 left-4 py-2">
        <img
          class="w-16"
          src="~/static/brasaoboicaprichoso.png"
          alt="brasão do caprichoso"
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
          hidden
        "
      >
        Boi de Parintins
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
  name: 'Caprichoso',
};
</script>

<style></style>
