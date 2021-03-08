<template>
  <div>
    <header
      :class="['bg-pattern', 'pt-20 pb-10', 'md:pt-24 pb-20', 'lg:pt-44']"
    >
      <vue-container>
        <div :class="['relative', 'pb-48']">
          <h1
            v-scroll-reveal.reset
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
              v-scroll-reveal.reset="{ delay: 100 }"
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
              v-scroll-reveal.reset="{ delay: 150 }"
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
                <strong class="text-primary-100 font-bold">브리아나</strong>의
                베타 버전이 출시되었습니다!</a
              >
              <a
                href="#"
                v-scroll-to="'#briana-stocker'"
                :class="[
                  'inline-flex items-center',
                  'mt-3',
                  'text-gray-400',
                  'text-xs',
                  'hover:underline'
                ]"
              >
                <span>브리아나 자세히 알아보기</span>
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
              </a>
            </div>
          </div>

          <img
            v-scroll-reveal.reset="{ delay: 200 }"
            src="/crypto.svg"
            :class="['absolute right-0 bottom-0', 'w-56 md:w-72 lg:w-96']"
          />
        </div>
      </vue-container>
    </header>

    <main class="py-10">
      <vue-container>
        <section id="briana-stocker">
          <div>
            <div v-scroll-reveal.reset>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512.023 512.023"
                fill="currentColor"
                :class="[
                  'bg-gradient-to-br from-gray-800 to-gray-700',
                  'rounded-lg',
                  'p-2',
                  'w-10 h-10'
                ]"
                xml:space="preserve"
              >
                <path
                  style="fill: #f44336"
                  d="M493.248,160.021H256.021c-53.019-0.052-96.042,42.886-96.095,95.905
	c-0.016,16.468,4.204,32.663,12.255,47.028L53.568,99.434c86.393-111.815,247.073-132.423,358.888-46.03
	C448.365,81.149,476.249,117.946,493.248,160.021z"
                />
                <path
                  style="fill: #ffc107"
                  d="M512.021,256.021c-0.118,141.336-114.664,255.882-256,256c-10.704,0.04-21.397-0.673-32-2.133
	l115.2-205.867c26.403-45.964,10.664-104.625-35.2-131.2c-14.521-8.407-31.008-12.824-47.787-12.8h237.013
	C505.705,190.491,512.083,223.103,512.021,256.021z"
                />
                <path
                  style="fill: #4caf50"
                  d="M339.221,304.021l-115.2,205.867h-0.213C83.62,492.176-15.666,364.172,2.046,223.984
	C7.779,178.609,25.57,135.6,53.568,99.434l118.613,203.52l0.64,1.067c26.451,45.95,85.143,61.757,131.093,35.307
	C318.592,330.879,330.773,318.698,339.221,304.021z"
                />
                <path
                  style="fill: #f44336"
                  d="M339.221,304.021c-26.451,45.95-85.143,61.757-131.093,35.307
	c-14.677-8.449-26.858-20.63-35.307-35.307l-0.64-1.067c-25.921-46.251-9.439-104.758,36.812-130.679
	c14.366-8.051,30.561-12.271,47.028-12.255h0.213c16.779-0.024,33.266,4.393,47.787,12.8
	C349.886,199.396,365.624,258.057,339.221,304.021z"
                />
                <path
                  style="fill: #2196f3"
                  d="M339.221,304.021c-26.451,45.95-85.143,61.757-131.093,35.307
	c-14.677-8.449-26.858-20.63-35.307-35.307l-0.64-1.067c-25.921-46.251-9.439-104.758,36.812-130.679
	c14.366-8.051,30.561-12.271,47.028-12.255h0.213c16.779-0.024,33.266,4.393,47.787,12.8
	C349.886,199.396,365.624,258.057,339.221,304.021z"
                />
                <path
                  style="fill: #fafafa"
                  d="M255.659,362.688c-18.598-0.002-36.868-4.903-52.971-14.208
	c-16.237-9.391-29.722-22.883-39.104-39.125c-29.455-51.018-11.975-116.254,39.043-145.709c16.233-9.372,34.65-14.301,53.395-14.291
	c58.91-0.046,106.704,47.674,106.749,106.584c0.015,18.752-4.915,37.176-14.291,53.416l0,0
	C329.256,342.405,293.893,362.724,255.659,362.688z M256.213,170.688c-30.613-0.163-58.955,16.13-74.219,42.667
	c-23.564,40.86-9.543,93.087,31.317,116.651s93.087,9.543,116.651-31.317l0,0c23.564-40.814,9.58-93.003-31.234-116.568
	c-12.922-7.46-27.574-11.402-42.494-11.432H256.213z"
                />
              </svg>
            </div>
            <div
              v-scroll-reveal.reset="{ delay: 100 }"
              :class="['uppercase text-primary-600 font-semibold', 'mt-2']"
            >
              크롬 확장 프로그램
            </div>
            <h2
              v-scroll-reveal.reset="{ delay: 150 }"
              :class="['font-bold', 'text-3xl']"
            >
              브리아나
            </h2>
            <p
              v-scroll-reveal.reset="{ delay: 200 }"
              :class="[
                'py-4',
                'max-w-lg',
                'text-gray-400',
                'text-sm md:text-base'
              ]"
            >
              브라우저 사용 중에 단축키를 눌러 지정해둔 가상화폐 시세를 빠르게
              확인하세요. 업비트에서 제공하는 데이터와 웹 소켓 기술을 이용해
              <b class="font-semibold text-gray-100">100% 실시간</b> 가상화폐
              데이터를 제공합니다.
            </p>
            <a
              href="https://bit.ly/3opWIp1"
              target="_blank"
              :class="[
                'inline-flex items-center',
                'font-semibold',
                'rounded-lg',
                'text-primary-100',
                'bg-primary-500',
                'py-2 pl-4 pr-5 md:py-3 md:pl-5 md:pr-6',
                'text-sm md:text-base'
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>브라우저에 추가하기</span>
            </a>
          </div>
          <div class="my-10" v-scroll-reveal.reset="{ delay: 250 }">
            <div class="relative max-w-md mx-auto">
              <div
                :class="[
                  'absolute rounded-lg inset-0 shadow-lg',
                  'bg-gradient-to-r from-primary-400 to-primary-500',
                  'transform skew-y-0 -rotate-6 rounded-3xl'
                ]"
              ></div>
              <div
                :class="[
                  'p-4 bg-gray-800 relative shadow-lg rounded-3xl overflow-hidden',
                  'border border-gray-900 border-opacity-40'
                ]"
              >
                <img
                  src="/chrome_webstore_screenshot.png"
                  alt="chrome-webstore-screenshot"
                />
              </div>
            </div>
          </div>
        </section>
      </vue-container>
    </main>
  </div>
</template>

<script>
export default {
  // async mounted() {
  //   const data = await this.$axios.get(
  //     'https://us-central1-briana-302801.cloudfunctions.net/checkHeader'
  //   )
  //   console.log(data)
  // }
}
</script>