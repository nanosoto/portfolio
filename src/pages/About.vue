<template>

<intersect @enter.once="aboutIn">
  <div class="about__wrapper">
	<div class="about__hero">
		<h1>Experience design and intelligent marketing for growing brands.<span>We focus on driving results.</span></h1>
		<img class="about__hero__thumbnail" src="../assets/about/1.jpg">
	</div>
	<div class="about__body-wrapper">
		<div class="about__body">
			<h3>CHALLENGE</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

			<h3>GOALS</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

			<h3>PHASES / CONTENT</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

			<h3>SOLUTION</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		</div>
	</div>
  </div>
 </intersect>

</template>

<script>
import anime from 'animejs'
import Intersect from 'vue-intersect'

export default {
  name: 'about',
  components: { Intersect },
  methods: {
    aboutIn() {
  		anime.timeline()
  		.add({
	  		targets: '.about__hero',
	        opacity: {
	        	value: [0, 1],
	        	duration: 800
	        },
	        height: {
	        	value: [0, 600],
	        	duration: 1400
	        },
	        easing: 'easeOutCubic'
  		})
  		.add({
	  		targets: '.about__hero__thumbnail',
	        scale: {
	        	value: [1.2, 1],
	        	duration: 1800
	        },
	        easing: 'easeOutCubic',
	        offset: 0
  		})
  		.add({
	  		targets: '.about__hero h1',
	        opacity: [0, 1],
	        translateY: [250, 0],
	        duration: 1600,
	        easing: 'easeOutCubic',
	        offset: '-=1250'
  		})
  		.add({
	  		targets: '.about__body-wrapper',
	        opacity: [0, 1],
	        translateY: [50, 0],
	        duration: 1600,
	        easing: 'easeOutCubic'
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
.about__hero {
	opacity: 0;
	overflow: hidden;
	transform-origin: 0 0;
	position: relative;
	top: -87px;
	left: 0;
	z-index: -1;
	width: 100%;
	width: 100vw;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding: 0 130px;

	.about__hero__thumbnail {
		position: absolute;
		top: 0;
		left: 0;
		height: 600px;
		width: 100%;
		max-width: 2904px;
		object-fit: cover;
	}

	h1 {
		font-family: 'Rubik', sans-serif;
		font-size: 54px;
		font-weight: 500;
		line-height: 1.4;
		color: rgba(255, 255, 255, 1);
		z-index: 1;
		opacity: 0;
		margin: 0 0 130px;
		mix-blend-mode: lighten;

		span {
			color: rgba(255, 255, 255, .6);
		}
	}
}
.about__body-wrapper {
	display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .about__body {
    	grid-area: 1 / 2 / end / 4;

    	h3 {
    		font-family: 'Rubik', sans-serif;
			text-transform: uppercase;
			font-weight: 500;
			letter-spacing: 0.5px;
			font-size: 28px;
			margin: 0 0 10px;
    	}

    	p {
    		margin: 0 0 45px;
    	}
    }
}
</style>
