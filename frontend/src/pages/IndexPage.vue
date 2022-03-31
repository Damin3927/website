<template>
  <q-page class="column items-center justify-center">
    <div v-html="md.render(targetText)"></div>

    <div class="row items-center justify-center q-gutter-lg">
      <router-link to="/me">me?</router-link>
      <router-link to="/ping">ping</router-link>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { md } from 'src/boot/markdown-it';

export default defineComponent({
  setup() {
    const targetText = `
\`\`\`ruby
try until success?
\`\`\`
    `;

    return {
      md,
      targetText,
    };
  },
});
</script>
