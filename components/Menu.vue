<template>
  <div
    class="shadow-md fixed inset-x-0 mx-auto top-0 z-10 bg-gray-900"
  >
    <header
      class="
        container
        p-4
        mx-auto
        flex
        justify-between
        items-center
        h-32
        relative
      "
    >
      <div
        class="flex items-center justify-center invisible md:visible"
      >
        <img
          src="~/assets/logo/portal-title.png"
          class="md:w-32 md:visible invisible"
          alt="Logo portal dos Bumbas"
        />
      </div>
      <div class="relative">
        <!-- <img
          src="~/assets/logo/logo-portal-completa.png"
          class="md:invisible w-48"
          alt="Logo portal dos Bumbas"
        /> -->
        <button
          class="
            md:hidden
            w-8
            h-8
            hover:bg-gray-800
            text-gray-400
            p-1
            absolute
            left-0
            top-0
          "
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current"
          >
            <path
              fill-rule=""
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule=""
            ></path>
          </svg>
        </button>
      </div>

      <ul
        class="
          flex flex-row
          text-gray-100
          justify-end
          items-center
          antialiased
          font-medium
          text-sm
          invisible
          md:visible
        "
      >
        <li class="mx-2 uppercase text-gray-400">
          <nuxt-link to="/"> Inicio </nuxt-link>
        </li>
        <li class="mx-2 uppercase text-blue-400">
          <nuxt-link to="caprichoso"> Caprichoso </nuxt-link>
        </li>
        <li class="mx-2 uppercase text-red-400">
          <nuxt-link to="garantido"> Garantido </nuxt-link>
        </li>
        <li class="mx-2 uppercase text-gray-400">Eventos</li>
        <li class="mx-2 uppercase text-green-400">
          Festival de Parintins
        </li>
        <li class="mx-2 uppercase text-gray-400">Sobre</li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
/* .container {
  @apply flex justify-center mx-auto;
} */
</style>
