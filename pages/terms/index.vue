<template>
  <div id="privacy">
    <main class="pt-20 pb-10">
      <vue-container>
        <h1>이용약관</h1>

        <section>
          <h2>1. 이용약관이란?</h2>
          <p>
            준비 중입니다.
          </p>
        </section>
      </vue-container>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '이용약관'
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply mt-4 text-2xl font-bold;
}
h2 {
  @apply mt-4 text-xl font-bold;
}
h3 {
  @apply mt-4 font-semibold;
}

section {
  @apply mt-10 md:mt-16;
}

p {
  @apply text-sm md:text-base;
  @apply mt-4;
  @apply leading-relaxed;
}

ul {
  @apply list-disc list-inside;
}
</style>