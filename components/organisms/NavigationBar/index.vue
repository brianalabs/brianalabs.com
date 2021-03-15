<template>
  <nav>
    <vue-container>
      <div class="flex items-center justify-between py-2">
        <n-link to="/">
          <img
            src="/logo.svg"
            alt="Briana Labs"
            :class="['w-48 md:w-60 lg:w-72']"
          />
        </n-link>

        <n-link :to="{ name: 'market' }" class="font-semibold">거래소</n-link>
      </div>
    </vue-container>
  </nav>
</template>
