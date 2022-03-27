<template>
  <q-page class="column items-center justify-center">
    <div v-html="md.render(targetText)"></div>

    <router-link to="/ping">ping</router-link>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import markdownIt from 'markdown-it';
import highlightjs from 'highlight.js';
import sanitizer from 'markdown-it-sanitizer';

export default defineComponent({
  setup() {
    const md = markdownIt({
      html: true,
      xhtmlOut: true,
      breaks: true,
      quotes: '“”‘’',
      typographer: true,
      highlight: function (code, lang) {
        return highlightjs.highlightAuto(code, [lang]).value;
      },
    }).use(sanitizer);

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
