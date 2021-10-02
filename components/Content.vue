<template>
  <section class="mt-5 mb-5">
    <h1 class="text-gray-500 font-extrabold py-6 text-2xl">
      {{title}
    </h1>
    <div class="grid grid-cols-3 gap-2">
      <article
        v-for="(post, index) in posts"
        :key="index"
        class="col-span-2 relative"
      >
        <span
          class="
            bg-blue-500
            p-2
            rounded
            absolute
            right-2
            top-2
            text-gray-100
            uppercase
          "
          >{{ post.category }}</span
        >
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-white
            p-4
            bg-gradient-to-t
            from-blue-900
            w-full
            text-xl
            font-extrabold
          "
        >
          {{ post.title }}
        </h3>
        <article class="w-full h-96">
          <img
            src="~/static/boi-de-rua-caprichoso.jpg"
            alt=""
            class="object-cover h-full w-full rounded"
          />
        </article>
      </article>
      <article class="w-full h-96 relative">
        <span
          class="
            bg-green-500
            p-2
            rounded
            absolute
            right-2
            top-2
            text-gray-100
            uppercase
          "
          >Cultura</span
        >
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-gray-100
            p-4
            bg-gradient-to-t
            from-gray-900
            w-full
            text-lg
            font-extrabold
          "
        >
          Márcia Novo divulga pré-save de remix em parceria com Rafa
          Dias, DJ da Anitta
        </h3>
        <img
          src="~/static/eletroboi.jpg"
          alt=""
          class="object-cover h-full w-full rounded"
        />
      </article>
      <article class="w-full h-96 relative">
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-white
            py-6
            px-4
            bg-gradient-to-t
            from-blue-900
            w-full
            text-xl
            font-extrabold
          "
        >
          Caprichoso grava álbum digital durante live do Boi de Rua
        </h3>
        <img
          src="~/static/patrick-araujo.jpg"
          alt=""
          class="object-cover h-full w-full rounded"
        />
      </article>
      <article class="w-full h-96 relative">
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-white
            p-4
            bg-gradient-to-t
            from-gray-900
            w-full
            text-xl
            font-extrabold
          "
        >
          Governo do Estado e Prefeitura entregam 200 cestas básicas a
          artistas de Parintins
        </h3>
        <img
          src="~/static/prefeitura.jpg"
          alt=""
          class="object-cover h-full w-full rounded"
        />
      </article>
      <article class="w-full h-96 relative">
        <span
          class="
            bg-red-500
            p-2
            rounded
            absolute
            right-2
            top-2
            text-gray-100
            uppercase
          "
          >Garantido</span
        >
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-white
            p-4
            bg-gradient-to-t
            from-red-900
            w-full
            text-xl
            font-extrabold
          "
        >
          Boi Garantido realiza entre os dias 03 e 05 de junho “I
          Semana do Meio Ambiente”
        </h3>
        <img
          src="~/static/garantido-post1.jpg"
          alt=""
          class="object-cover h-full w-full rounded"
        />
      </article>
      <article class="w-full h-96 relative">
        <span
          class="
            bg-red-500
            p-2
            rounded
            absolute
            right-2
            top-2
            text-gray-100
            uppercase
          "
          >Garantido</span
        >
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-white
            p-4
            bg-gradient-to-t
            from-red-900
            w-full
            text-xl
            font-extrabold
          "
        >
          Cantor e compositor Helen Veras realiza live regada a
          solidariedade e muitas toadas de boi - bumbá
        </h3>
        <img
          src="~/static/helen-veras.jpg"
          alt=""
          class="object-cover h-full w-full rounded"
        />
      </article>
      <article class="w-full h-96 relative">
        <span
          class="
            bg-blue-500
            p-2
            rounded
            absolute
            right-2
            top-2
            text-gray-100
            uppercase
          "
          >Caprichoso</span
        >
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-white
            py-6
            px-4
            bg-gradient-to-t
            from-blue-900
            w-full
            text-xl
            font-extrabold
          "
        >
          Caprichoso grava álbum digital durante live do Boi de Rua
        </h3>
        <img
          src="~/static/patrick-araujo.jpg"
          alt=""
          class="object-cover h-full w-full rounded"
        />
      </article>
      <article class="w-full h-96 relative">
        <span
          class="
            bg-green-500
            p-2
            rounded
            absolute
            right-2
            top-2
            text-gray-100
            uppercase
          "
          >Cultura</span
        >
        <h3
          class="
            absolute
            bottom-0
            left-0
            text-white
            py-6
            px-4
            bg-gradient-to-t
            from-gray-900
            w-full
            text-xl
            font-extrabold
          "
        >
          Eletroboi agita as redes em live direto da ilha de Parintins
        </h3>
        <img
          src="~/static/eletroboi-marcianovo.jpg"
          alt=""
          class="object-cover h-full w-full rounded"
        />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Content',
  props: {
    posts: {
      type: Array,
      require: true,
      default: () => [],
    },
    layout: {
      type: String,
      require: true,
      default: '',
    },
    title: {
      type: String,
      default: 'Inserir Titulo',
    },
  },
};
</script>

<style></style>
