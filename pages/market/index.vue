<template>
  <div>
    <div class="pt-14">
      <VueContainer>
        <!-- <div class="flex bg-gray-700">
          <vue-toggle>실시간 정렬</vue-toggle>
        </div> -->

        <div v-if="$fetchState.pending">
          loading..
        </div>
        <div>
          <div v-if="$fetchState.error"></div>
          <table v-else class="w-full table-auto mt-2 transition-all">
            <thead class="text-gray-500 text-xs">
              <tr>
                <th class="py-1 px-2 text-left">코인</th>
                <th class="py-1 px-2 text-right">현재가</th>
                <th
                  :class="[
                    'transition-colors py-1 px-2 text-right cursor-pointer select-none',
                    'hover:text-gray-300'
                  ]"
                  @click="
                    SetSort(
                      sort === 'cr_asc' ? (sort = 'cr_desc') : (sort = 'cr_asc')
                    )
                  "
                >
                  <span class="align-middle">전일대비</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 inline-block"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </th>
                <th
                  :class="[
                    'transition-colors py-1 px-2 text-right cursor-pointer select-none',
                    'hover:text-gray-300'
                  ]"
                  @click="
                    SetSort(
                      sort === 'acc_trade_price_24h_asc'
                        ? (sort = 'acc_trade_price_24h_desc')
                        : (sort = 'acc_trade_price_24h_asc')
                    )
                  "
                >
                  <span class="align-middle">거래대금</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 inline-block"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="market in Object.keys(markets)"
                :key="market"
                :class="[
                  'transition-colors',
                  'text-2xs md:text-xs text-center',
                  'hover:bg-gray-900',
                  'pt-2'
                ]"
              >
                <td class="py-1 px-2 text-left">
                  <div class="text-gray-200 font-semibold">
                    {{ markets[market].korean_name }}
                  </div>
                  <div class="text-2xs text-gray-500">
                    {{ markets[market].market }}
                  </div>
                </td>
                <td class="py-1 px-2 text-right font-mono">
                  {{ GetTradePrice(markets[market]) }}
                </td>
                <td
                  :class="[
                    'py-1 px-2 text-right font-mono',
                    GetChangeColor(markets[market])
                  ]"
                >
                  <div>
                    {{ GetChangeRate(markets[market]) }}
                  </div>
                  <div class="text-2xs">
                    {{ GetChangePrice(markets[market]) }}
                  </div>
                </td>
                <td class="py-1 px-2 text-right text-gray-500 font-mono">
                  {{ GetAccTradePrice24(markets[market]) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </VueContainer>
    </div>
  </div>
</template>

<script>
import { Upbit, UpbitWebSocket } from 'upbit-client'
export default {
  head() {
    return {
      title: '거래소'
    }
  },
  data() {
    return {
      markets: {},
      sort: 'acc_trade_price_24h',
      liveSorting: true
    }
  },
  async fetch() {
    try {
      const upbit = new Upbit()
      const marketCodes = await upbit.GetMarketCodes()

      const codes = []

      marketCodes.forEach(item => {
        if (item.market.includes('KRW-')) {
          this.markets[item.market] = item
          codes.push(item.market)
        }
      })

      const { data } = await this.$axios.get(
        `https://api.upbit.com/v1/ticker?markets=${codes}`
      )

      data.forEach(ticker => {
        this.markets[ticker.market] = {
          ...this.markets[ticker.market],
          ...ticker
        }
      })

      this.Sort(this.sort)

      const upbit_ws = new UpbitWebSocket()
      upbit_ws.Open({ type: 'ticker', codes })

      upbit_ws.OnMessage(data => {
        if (!this.markets[data.cd]) {
          return
        }

        // this.markets[data.cd] = {
        //   ...this.markets[data.cd],
        //   trade_price: data.tp,
        //   change: data.c,
        //   change_price: data.cp,
        //   change_rate: data.cr,
        //   acc_trade_price_24h: data.atp24h
        // }

        this.markets[data.cd].trade_price = data.tp
        this.markets[data.cd].change = data.c
        this.markets[data.cd].change_price = data.cp
        this.markets[data.cd].change_rate = data.cr
        this.markets[data.cd].acc_trade_price_24h = data.atp24h

        if (this.liveSorting) {
          this.Sort(this.sort)
        }
      })

      upbit_ws.OnClose(() => {
        upbit_ws.Open({ type: 'ticker', codes })
      })
    } catch (err) {
      this.$log(err)
    }
  },
  methods: {
    Sort(sort) {
      const markets = Object.entries(this.markets)
        .sort((a, b) => {
          switch (sort) {
            case 'cr_asc':
              return a[1].change_rate - b[1].change_rate

            case 'cr_desc':
              return b[1].change_rate - a[1].change_rate

            case 'acc_trade_price_24h_asc':
              return a[1].acc_trade_price_24h - b[1].acc_trade_price_24h

            default:
              return b[1].acc_trade_price_24h - a[1].acc_trade_price_24h
          }
        })
        .reduce((acc, [key, value]) => {
          acc[key] = value
          return acc
        }, {})

      this.markets = markets
    },
    SetSort(sort) {
      this.sort = sort

      this.Sort(sort)
    },
    GetChangePrefix(ticker) {
      let prefix = ''
      if (ticker.change === 'RISE') {
        prefix = '+'
      } else if (ticker.change === 'FALL') {
        prefix = '-'
      } else {
        prefix = ''
      }

      return prefix
    },
    GetChangeColor(ticker) {
      if (ticker.change === 'RISE') {
        return 'text-green-700'
      } else if (ticker.change === 'FALL') {
        return 'text-red-700'
      } else {
        return ''
      }
    },
    GetTradePrice(ticker) {
      return ticker.trade_price.toLocaleString() || '0'
    },
    GetChangePrice(ticker) {
      return (
        this.GetChangePrefix(ticker) + ticker.change_price.toLocaleString() ||
        '0'
      )
    },
    GetAccTradePrice24(ticker) {
      return Math.round(ticker.acc_trade_price_24h).toLocaleString() + '원'
    },
    GetChangeRate(ticker) {
      return (
        this.GetChangePrefix(ticker) +
        Number(ticker.change_rate * 100).toFixed(2) +
        '%'
      )
    }
  },
  mounted() {
    this.$fetch()
  }
}
</script>