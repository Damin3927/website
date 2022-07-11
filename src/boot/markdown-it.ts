import markdownIt from 'markdown-it';
import highlightjs from 'highlight.js';
import sanitizer from 'markdown-it-sanitizer';

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

export { md };
