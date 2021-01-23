<template>
  <div>
    <header :class="['bg-pattern', 'pt-20 pb-10 md:py-24']">
      <vue-container>
        <div :class="['relative', 'pb-48']">
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

          <div :class="['text-sm md:text-base lg:text-lg']">
            <div
              :class="[
                'pt-4 md:pt-6 lg:pt-8',
                'max-w-xs md:max-w-md lg:max-w-lg'
              ]"
            >
              <p :class="['text-gray-400']">
                브리아나는 당신의 성공적인
                <b class="font-semibold text-gray-200">코인 투자</b>를 위한
                인공지능 비서입니다. 머신러닝, 딥러닝으로 학습하는 브리아나의
                강력한 기능을 무료로 사용해보세요.
              </p>
            </div>

            <div
              :class="[
                'inline-flex flex-col items-center',
                'w-full md:w-auto',
                'mt-6 md:mt-10'
              ]"
            >
              <a
                :class="[
                  'inline-block rounded-lg font-semibold',
                  'bg-primary-800 text-primary-300',
                  'py-3 px-6',
                  'text-xs md:text-sm'
                ]"
                >브리아나 랩스의 첫 번째 서비스
                <strong class="text-primary-100 font-bold">스토커</strong>가 곧
                출시됩니다!</a
              >
              <button
                :class="[
                  'inline-flex items-center',
                  'mt-3',
                  'text-gray-400',
                  'text-xs',
                  'hover:underline'
                ]"
              >
                <span>브리아나 스토커 자세히 알아보기</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="animate-bounce w-3 h-3 ml-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

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