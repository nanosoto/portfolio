<template>
	<div class="home__wrapper">

		<home-intro></home-intro>

		<portfolio-projects></portfolio-projects>

	</div>
</template>

<script>
import anime from 'animejs'
import portfolioProjects from '@/components/portfolioProjects'
import homeIntro from '@/components/homeIntro'

export default {
  name: 'home',
  components: {
	'portfolio-projects': portfolioProjects,
	'home-intro': homeIntro
  },
}
</script>

<style lang="scss" scoped>

</style>
