<template>

		<intersect @enter.once="projectGridIn">
	<div class="project__grid">

			<div class="project__grid-item">
				<router-link to="/projects/customer-mopa">
					<h1>customer mopa</h1>
				</router-link>
			</div>
			<div class="project__grid-item">
				<router-link to="/projects/customer-mopa">
					<h1>TUS</h1>
				</router-link>
			</div>
			<div class="project__grid-item">
				<router-link to="/projects/customer-mopa">
					<h1>UPONOR</h1>
				</router-link>
			</div>
			<div class="project__grid-item">
				<router-link to="/projects/customer-mopa">
					<h1>Marketing y comunicación</h1>
				</router-link>
			</div>
			<div class="project__grid-item">
				<router-link to="/projects/customer-mopa">
					<h1>GESSAN</h1>
				</router-link>
			</div>
			<div class="project__grid-item">
				<router-link to="/projects/customer-mopa">
					<h1>Taste compass</h1>
				</router-link>
			</div>

	</div>

		</intersect>
</template>

<script>
import anime from 'animejs'
import Intersect from 'vue-intersect'

export default {
  name: 'projects',
  components: { Intersect },
  methods: {
    projectGridIn() {
  		anime.timeline()
  		.add({
	  		targets: '.project__grid-item',
	        opacity: [0, 1],
	        translateY: [60, 0],
	        easing: 'easeOutCubic',
	        delay: function(el, i) {
		      return 300 + 120 * i;
		    } 
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
	.project__grid {
		display: grid;
	    grid-template-columns: 1fr 1fr;
	    grid-template-rows: auto;
	    grid-gap: 30px;
	    padding: 50px 130px;

	    .project__grid-item {
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgba(136, 168, 188, .2);
			color: rgba(136, 168, 188, 1);
			height: 400px;
			border-radius: 20px;
			opacity: 0;
	    }
	}
</style>
