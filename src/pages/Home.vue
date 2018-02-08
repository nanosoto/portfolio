<template>
	<div class="home__wrapper">

		<home-intro></home-intro>

		<home-projects></home-projects>

	</div>
</template>

<script>
import anime from 'animejs'
import homeProjects from '@/components/homeProjects'
import homeIntro from '@/components/homeIntro'

export default {
  name: 'home',
  components: {
	'home-projects': homeProjects,
	'home-intro': homeIntro
  },
}
</script>

<style lang="scss" scoped>

</style>
