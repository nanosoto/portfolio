<template>
	<div class="home__projects">
		<div class="project CM">
			<router-link to="/projects/customer-mopa">
				<intersect @enter.once="cmIn">
					<div class="project__container">
						<router-link to="/projects/customer-mopa" class="project__title">customer mopa</router-link>
						<p class="project__overview">Management web tool that allows individuals to train through demo videos</p>
						<div class="project__thumbnail__container CM__thumbnail">
							<img class="CM__top-thumbnail" src="../assets/CM/CM_top.png">
							<img class="CM__left-thumbnail" src="../assets/CM/CM_left.png">
							<img class="CM__right-thumbnail" src="../assets/CM/CM_right.png">
						</div>
					</div>
				</intersect>
			</router-link>
		</div>
		<div class="project TUS">
			<router-link to="/projects/customer-mopa">
				<div class="project__container">
					<router-link to="/projects/customer-mopa" class="project__title">TUS</router-link>
					<p class="project__overview">Management web tool that allows individuals to train through demo videos</p>
					<img class="project__thumbnail TUS__thumbnail" src="../assets/TUS/red.png">
				</div>
			</router-link>
		</div>
		<div class="project UP">
			<router-link to="/projects/customer-mopa">
				<div class="project__container">
					<router-link to="/projects/customer-mopa" class="project__title">UPONOR</router-link>
					<p class="project__overview">Management web tool that allows individuals to train through demo videos</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import anime from 'animejs'
  	import Intersect from 'vue-intersect'

	export default {
	  name: 'homeProjects',
	  components: { Intersect },
	  methods: {
	  	cmIn() {
	  	  anime.timeline() 
	  	  .add({
	      	targets: '.CM .project__container',
	      	scaleY: [.4, 1],
	      	duration: 600,
	      	easing: 'easeInCubic',
	        autoplay: false
	      })
	  	  .add({
	      	targets: '.CM .project__title',
	      	translateY: [50, 0],
	      	opacity: [0, 1],
	      	duration: 1600,
	      	delay: 300,
            offset: '-=400',
	        autoplay: false
	      })
	      .add({
	      	targets: '.CM .project__overview',
	      	translateY: [50, 0],
	      	opacity: [0, 1],
	      	duration: 1600,
            offset: '-=1400',
	        autoplay: false
	      })
	  	  .add({
	      	targets: '.CM__thumbnail .CM__top-thumbnail',
	      	rotate: [45, 45],
	      	opacity: {
	      	  value: [0, 1],
	      	  duration: 1850
	      	},
	      	translateY: {
              value: -25,
              duration: 1850
            },
            offset: '-=1600',
	        autoplay: false
	      })
	      .add({
	      	targets: '.CM__thumbnail .CM__right-thumbnail',
	      	rotate: [48, 45],
	      	opacity: {
	      	  value: [0, 1],
	      	  duration: 1850
	      	},
	      	translateY: {
              value: -25,
              duration: 1850,
            },
            offset: '-=1650',
	        autoplay: false
	      })
	      .add({
	      	targets: '.CM__thumbnail .CM__left-thumbnail',
	      	rotate: [42, 45],
	      	opacity: {
	      	  value: [0, 1],
	      	  duration: 1850
	      	},
	      	translateY: {
              value: -25,
              duration: 1850
            },
            offset: '-=1650',
	        autoplay: false
	      })
	  	}
	  }
	}
</script>

<style lang="scss" scoped>
	.home__projects {
		display: grid;
	    grid-template-columns: 100px 1fr 1fr 100px;
	    grid-template-rows: auto;
	    grid-gap: 30px;
	    margin: 0 0 100px;
	}
	.project {
		overflow: hidden;
		border-radius: 20px;

		.project__container {
				position: relative;
				margin: 0;
				padding: 50px;
				height: 350px;
				background: rgba(136, 168, 188, .15);
				display: flex;
				flex-direction: column;
				transform-origin: 0 0;

			.project__title {
				display: block;
				margin: 0 0 15px;
				font-family: 'Rubik', sans-serif;
				font-size: 58px;
				text-decoration: none;
			}
			.project__overview {
			}
		}

		&:first-child {
			grid-area: 1 / 2 / 2 / 4;
		}
		&:nth-child(2) {
			grid-area: 2 / 2 / 3 / 3;
		}
		&:nth-child(3) {
			grid-area: 2 / 3 / 3 / 4;
		}

		&.CM {
			padding-top: 150px;

			.project__container {
				background: linear-gradient(to right, #42A5F5,#1976D2);
				border-radius: 20px;

				.project__title {
					color: #FFF;
				}
				.project__overview {
					max-width: 500px;
					color: rgba(255, 255, 255, .7);
				}
				.CM__thumbnail {
					.CM__top-thumbnail,
					.CM__left-thumbnail,
					.CM__right-thumbnail {
						width: 280px;
						height: auto;
						position: absolute;
						right: 50px;
						bottom: -160px;
						opacity: 0;
					}
					.CM__top-thumbnail {
						bottom: unset;
						right: 65px;
						top: -150px;
					}
					.CM__left-thumbnail {
						right: 330px;
					}
				}
			}
		}

		&.TUS {
			transition-delay: 350ms;
			overflow: visible;

			.project__container {
				//background: linear-gradient(135deg, rgba(153,230,0,1) 0%, rgba(118,173,0,1) 100%);
				height: 530px;
				border-radius: 20px;
				overflow: hidden;
				// justify-content: flex-end;

				.project__title {
					//color: #FFF;
				}
				.project__overview {
					//color: rgba(255, 255, 255, .7);
				}
				.TUS__thumbnail {
					width: 170%;
					height: auto;
					position: absolute;
					bottom: -75%;
					right: -50%;
					//box-shadow: 0px 2px 34px 0px rgba(0, 0, 0, 0.13);
					//border-radius: 5px;
				}
			}
		}

		&.UP {
		}
	}
</style>
