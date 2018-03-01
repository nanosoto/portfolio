<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <footer-nanosoto></footer-nanosoto>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
body {line-height: 1;}
ol, ul {list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none;}
table {border-collapse: collapse; border-spacing: 0;}
* {box-sizing: border-box; text-rendering: optimizeLegibility !important; -webkit-font-smoothing: antialiased !important;}

html {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
  min-height: 100vh;
  background-color: var(--body-background-color, #FFF);
  color: var(--body-text-color, hsla(203, 28%, 54%, 1));

  font-size: var(--font-size-base);
  letter-spacing : 0.14px;
}

::-moz-selection {
  background-color: #0bd0d9;
  color: #FFF;
  text-shadow: none;
}

::selection {
  background-color: #0bd0d9;
  color: #FFF;
  text-shadow: none;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  line-height: 2;
}

.intro__tagline span {
  display: inline-block;
  min-width: 12.4px;

  &:nth-child(11) {
    font-style: italic;
    color: hsla(203, 28%, 74%, 1);
    font-weight: 400;
  }

  &:nth-child(21) {
    display: block;
  }
}

.intro__subTagline span {
  display: inline-block;
  min-width: 13.34px;
}

.about__tagline span,
 .about__subTagline span {
  display: inline-block;
  min-width: 11.4px;
}

.home__intro .Masthead__image.is-parallax {
  overflow: visible;
}
</style>
