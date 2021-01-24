<template>
  <footer :class="['text-xs text-gray-600', 'pt-4 pb-10']">
    <vue-container>
      <div class="flex items-center justify-between">
        <vue-copyright />
        <ul>
          <li>
            <n-link to="/privacy">개인정보처리방침</n-link>
          </li>
        </ul>
      </div>
    </vue-container>
  </footer>
</template>