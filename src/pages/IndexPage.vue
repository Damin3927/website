<template>
  <q-page class="column items-center justify-center">
    <div v-html="md.render(targetText)"></div>

    <div class="row items-center justify-center q-gutter-lg q-mb-lg">
      <router-link to="/me">me?</router-link>
    </div>

    <div class="row items-center justify-center q-gutter-lg">
      <a href="https://naming.bonfida.org/#/domain/damin">
        damin.sol
        <q-tooltip> I'm a big fan of Solana </q-tooltip>
      </a>
      <div class="row-items-center justify-center q-gutter-xs">
        <a href="https://twitter.com/damin_sol" class="outside-icon">
          <q-btn flat round icon="mdi-twitter" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100066516363131"
          class="outside-icon"
        >
          <q-btn flat round icon="mdi-facebook" />
        </a>
      </div>
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

<style lang="scss" scoped>
.outside-icon {
  text-decoration: none;
  color: black;
}
</style>
