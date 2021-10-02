<template>
  <div>
    <section class="my-15">
      <h1 class="text-gray-500 font-extrabold py-6 text-2xl">
        Últimas Notícias
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        <article
          v-for="i in 10"
          :key="i"
          class="w-full mx-auto h-96 relative"
        >
          <span
            class="
              absolute
              top-2
              right-2
              bg-green-500
              px-3
              rounded
              text-gray-100
              uppercase
              text-sm
            "
            >Cultura</span
          >
          <img
            src="~/assets/eletroboi.webp"
            alt=""
            class="object-cover h-full w-full rounded"
          />
          <div
            class="
              absolute
              bottom-0
              left-0
              p-4
              bg-gradient-to-t
              from-gray-900
            "
          >
            <h3 class="text-gray-100 w-full text-md font-extrabold">
              Márcia Novo divulga pré-save de remix em parceria com
              Rafa Dias, DJ da Anitta
            </h3>
          </div>
          <p
            class="
              text-gray-500
              w-full
              text-xs
              absolute
              -bottom-5
              left-0
            "
          >
            <img
              src="~/assets/icons/clock.svg"
              class="absolute bottom-5 left-0"
            />
            25 de Setembro de 2021
          </p>
        </article>
      </div>
    </section>
    <section class="bg-gray-300 bg-opacity-25 text-center h-48 my-10">
      Área de Anunciante
    </section>
  </div>
</template>
<script>
export default {};
</script>

<style lang="postcss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
