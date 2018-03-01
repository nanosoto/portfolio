<template>
	
	<transition appear v-on:appear="navigationIn">
		<div class="nav" :class="{ lightNav: $route.path === '/projects/customer-mopa' || $route.path === '/about-caster' , halfLightNav: $route.path === '/about' }">

			<router-link to="/" class="nav__logo">nanosoto</router-link>

			<ul class="nav__list">
				<li class="nav__item">
					<router-link to="/projects">projects</router-link>
				</li>
				<li class="nav__item">
					<router-link to="/about">about me</router-link>
				</li>
				<li class="nav__item">
					<router-link to="/contact">contact</router-link>
				</li>
			</ul>
		</div>
	</transition>

</template>

<script>
import anime from 'animejs'

export default {
  name: 'navigation',
  methods: {
  	navigationIn() {
  		anime.timeline()
  		.add({
	  		targets: '.nav',
	        scaleX: [0, 1],
	        duration: 1400,
	        delay: 600,
	        easing: 'easeOutExpo'
  		})
  		.add({
	  		targets: '.nav__logo',
	        translateX: [10, 0],
	        opacity: [0, 1],
	        duration: 1400,
	        offset: '-=800',
	        easing: 'easeOutExpo'
  		})
  		.add({
  			targets: '.nav__list .nav__item',
	        translateX: [-10, 0],
	        opacity: [0, 1],
	        duration: 1400,
	        offset: '-=1400',
	        easing: 'easeOutExpo',
	        delay: function(el, i) {
		      return 300 + 120 * i;
		    }
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
	.nav {
		display: flex;
		padding: 35px 0;
		margin: 0 130px;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid hsla(203, 28%, 90%, 1);
    	position: relative;
		z-index: 100;
		

		// .router-link-exact-active,
		.nav__logo {
			// color: #FFF;
			&:hover,
			&.router-link-exact-active {
				&:after {
					content:']';
					display: inline-block;
					position: absolute;
					right: -12px;
					top: 1px;
				}
				&:before {
					content:'[';
					display: inline-block;
					position: absolute;
					left: -12px;
					top: 1px;
				}
			}

			&:hover {
				color: #000;
			}
		}

		.nav__list {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 0;
			line-height: 1;

			.nav__item a {
				margin: 0 45px 0 0;
				list-style: none;
				text-align: center;

				&.router-link-active, 
				&:hover {
					&:after {
						content:']';
						display: inline-block;
						position: absolute;
						right: 33px;
						top: 1px;
					}
					&:before {
						content:'[';
						display: inline-block;
						position: absolute;
						left: -12px;
						top: 1px;
					}
				}

				&:hover {
					color: #000;
				}

			}

			.nav__item:last-child a {
				margin: 0;

				&.router-link-active, 
				&:hover {
					&:after {
						right: -12px;
					}
				}
			}
		}

		&.lightNav {
			color: #FFF;
			border-bottom: 1px solid rgba(255, 255, 255, .2);

			.nav__item a:hover,
			.nav__logo:hover {
					color: rgba(255, 255, 255, .6);
			}
		}

		&.halfLightNav {

			.nav__item {
				color: #FFF;
				
				a:hover {
					color: rgba(255, 255, 255, .6);
				}
			}
		}
	}
</style>
