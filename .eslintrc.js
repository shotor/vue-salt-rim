module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "vue/html-indent": ["warn", 4],
    "vue/max-attributes-per-line": ['off'],
    "vue/multiline-html-element-content-newline": ['off'],
    "vue/html-self-closing": ['off'],
    "vue/no-v-html": ['off'],
    "vue/singleline-html-element-content-newline": ['off'],
    "vue/v-on-event-hyphenation": ['warn', 'always', {
      autofix: true
    }],
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
  }
}
