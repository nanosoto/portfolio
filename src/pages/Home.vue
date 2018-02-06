<template>
	<div class="home__wrapper">

		<div class="home__intro">
			<transition appear v-on:appear="introIn">
				<h2 id="tagline" class="intro__tagline">Designing & building meaningful digital products</h2>
			</transition>
			<transition appear v-on:appear="introSubTIn">
				<h2 id="subTagline" class="intro__subTagline">product designer focused on UX/UI and front-end development</h2>
			</transition>
		</div>

		<home-projects></home-projects>

	</div>
</template>

<script>
import anime from 'animejs'
import homeProjects from '@/components/homeProjects'

export default {
  name: 'home',
  methods: {
    introIn: function (el) {
      var text = document.getElementById('tagline')
      var msg = text.textContent
      msg = msg.split('')
      text.innerHTML = '<span class="letter">' + msg.join('</span><span class="letter">') + '</span>'

      anime({
        targets: '.intro__tagline span',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: function (el, i) {
          return 300 + 15 * i
        }
      })
    },
    introSubTIn: function (el) {
      var text = document.getElementById('subTagline')
      var msg = text.textContent
      msg = msg.split('')
      text.innerHTML = '<span class="letter">' + msg.join('</span><span class="letter">') + '</span>'

      anime({
        targets: '.intro__subTagline span',
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: function (el, i) {
          return 550 + 15 * i
        }
      })
    }
  },
  components: {
	'home-projects': homeProjects
  },
}
</script>

<style lang="scss" scoped>

.home__intro {
	display: flex;
	flex-direction: column;
	padding: 0;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: calc(100vh - 174px);

	.intro__tagline {
		font-family: 'Rubik', sans-serif;
		font-size: 54px;
		font-weight: 500;
		line-height: 1.4;
	}

	.intro__subTagline {
		font-size: 22px;
		margin: 45px 0 0;
		line-height: 1.4;
	}
}

</style>
