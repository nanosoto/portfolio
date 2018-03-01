<template>
	<intersect @enter.once="projectGridIn">
		<div class="project__grid">
			<div class="project__grid-item">
				<router-link to="/projects/customer-mopa">
					<div class="project__grid-thumbnail">
						<img class="thumbnail" src="../assets/cm/bg.jpg">
					</div>
					<h1>customer mopa</h1>
					<p>Strategy, Concept, UI, UX, Development</p>
				</router-link>
			</div>
			<div class="project__grid-item disabled">
				<router-link to="/projects/customer-mopa">
					<div class="project__grid-thumbnail">
						<img class="thumbnail" src="../assets/projects/tus.jpg">
					</div>
					<h1>Totem TUS / soon</h1>
					<p>UI, UX, Development</p>
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
				translateY: [60, 0],
				opacity: [0, 1],
				easing: 'easeOutCubic',
				duration: 1400,
				delay: function(el, i) {
					return 200 + 1200 * i;
				} 
			})
		}
	}
	}
</script>

<style lang="scss" scoped>
	.project__grid {
		display: grid;
	    grid-template-columns: 1fr;
	    grid-template-rows: auto;
	    grid-gap: 90px;
	    padding: 50px 130px;

	    .project__grid-item {
			display: flex;
			height: 470px;
			opacity: 0;

			.project__grid-thumbnail {
				height: 400px;
				margin: 0 0 20px;
				transform-origin: 0 0;
			    transition: height 250ms ease-in-out;
				overflow: hidden;
				
				.thumbnail {
					height: 400px;
					width: 100%;
					object-fit: cover;
				}
			}

			h1 {
				font-family: 'Rubik', sans-serif;
				color: #000;
				font-size: 18px;
			}

			&:hover {
				.project__grid-thumbnail {
					height: 380px;
				}
			}

			&.disabled {
				pointer-events: none;

				.project__grid-thumbnail,
				h1,
				p {
					opacity: .4;
				}
			}

	    }
	}
</style>
