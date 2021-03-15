<template>
  <div>
    <span
      role="checkbox"
      tabindex="0"
      :aria-checked="checked"
      :class="[
        'relative inline-flex flex-shrink-0 cursor-pointer rounded-full',
        'transition-colors ease-in-out duration-200',
        'border-2 border-transparent',
        'focus:ring-2 focus:ring-primary-500 focus:outline-none focus:ring-opacity-50',
        checked ? 'bg-primary-500' : 'bg-gray-300'
      ]"
      @click="checked = !checked"
    >
      <input type="hidden" />
      <span
        aria-hidden="true"
        class="rounded-full w-4 h-4 flex items-center justify-center text-gray-400 text-xs"
      ></span>
      <span
        aria-hidden="true"
        class="rounded-full w-4 h-4 flex items-center justify-center text-gray-400 text-xs"
      ></span>
      <span
        aria-hidden="true"
        class="absolute z-10 transform transition ease-in-out duration-300 h-4 w-4 rounded-full bg-gray-50 shadow flex items-center justify-center text-xs"
        :class="[checked ? 'translate-x-full' : 'translate-x-0']"
      ></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>