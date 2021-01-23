<template>
  <span>© {{ GetYear }} Briana Labs. All right reserved.</span>
</template>

<script>
export default {
  computed: {
    GetYear() {
      return new Date().getFullYear()
    }
  }
}
</script>