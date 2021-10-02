<template>
  <div class="w-full mx-auto sm:px-1 px-2">
    <Menu />
    <section
      class="
        container
        mx-auto
        p-6
        md:bg-gradient-to-r
        from-blue-900
        to-red-900
        md:mt-40
        mt-36
        h-52
        sm:h-72
        rounded
        md:h-auto
        bg-capvsred bg-center bg-cover
        text-white
      "
    >
      <div
        class="
          md:flex
          md:justify-between
          md:items-center
          sm:max-w-screen-xl
          mx-auto
        "
      >
        <article class="sm:max-w-screen-sm text-gray-100">
          <h1
            class="
              mb-10
              md:text-5xl
              font-extrabold
              text-center text-2xl
            "
          >
            Festival de parintins 2022
          </h1>
          <div class="max-w-6x1 sm:text-3xl sm:py-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Veritatis, ab. Lorem ipsum dolor sit amet.
          </div>
        </article>
        <img
          class="invisible md:visible md:w-6/12"
          src="~/static/home_arte-ingressos.png"
          alt=""
        />
      </div>
    </section>
    <main class="container mx-auto">
      <Nuxt />
    </main>
  </div>
</template>

<style></style>
