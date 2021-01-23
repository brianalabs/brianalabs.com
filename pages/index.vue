<template>
  <div>
    <header :class="['bg-pattern', 'py-20 md:py-24']">
      <vue-container>
        <div :class="['relative', 'pb-44']">
          <h1
            :class="[
              'font-extrabold',
              'max-w-xs md:max-w-md lg:max-w-xl',
              'text-4xl md:text-6xl lg:text-7xl',
              ''
            ]"
          >
            가상화폐를 위한 인공지능 비서,
            <span
              class="text-gradient bg-gradient-to-r from-primary-500 to-primary-700"
              >브리아나</span
            >
          </h1>

          <p
            :class="[
              'text-gray-400',
              'text-sm md:text-base lg:text-lg',
              'pt-4 md:pt-6 lg:pt-8',
              'max-w-xs md:max-w-sm lg:max-w-lg'
            ]"
          >
            브리아나는 당신의 성공적인
            <strong class="font-semibold text-gray-200">코인 투자</strong>를
            위한 인공지능 비서입니다. 머신러닝, 딥러닝으로 학습하는 브리아나의
            강력한 기능을 무료로 사용해보세요.
          </p>

          <a
            :class="[
              'inline-block rounded-lg font-semibold',
              'bg-primary-600 text-primary-100',
              'mt-10',
              'py-3 px-6'
            ]"
            >브리아나 랩스의 첫 번째 서비스 "스토커"가 곧 출시됩니다!</a
          >

          <img
            src="/crypto.svg"
            :class="['absolute right-0 bottom-0', 'w-56 md:w-72 lg:w-96']"
          />
        </div>
      </vue-container>
    </header>

    <main class="py-10">
      <vue-container>
        <section>
          <h2>브리아나 스토커</h2>
        </section>
      </vue-container>
    </main>
  </div>
</template>