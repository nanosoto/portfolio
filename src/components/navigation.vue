<template>
	
	<transition appear v-on:appear="navigationIn">
		<div class="nav" v-bind:class="{ lightNav: lightNav }">

			<router-link to="/" class="nav__logo">nanosoto</router-link>

			<ul class="nav__list">
				<!--
				<li class="nav__item" v-on:click="greet">
					<router-link to="/projects">
						projects
					</router-link>
				</li>
				-->
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

			<div class="nav__indicator">
				<transition appear v-on:appear="animatedLogo">
					<div class="animateThis blue"></div>
				</transition>
				<transition appear v-on:appear="animatedLogo">
					<div class="animateThis green"></div>
				</transition>
				<transition appear v-on:appear="animatedLogo">
					<div class="animateThis red"></div>
				</transition>
			</div>
		</div>
	</transition>

</template>

<script>
import anime from 'animejs'

export default {
  name: 'navigation',
  data() {
  	return {
  		lightNav: false
  	}
  },
  watch: {
    '$route' () {
      if (this.$route.path === '/projects/customer-mopa') {
        this. lightNav = true
      }
      else if (this.$route.path === '/about') {
		this. lightNav = true
      } else {
        this. lightNav = false
      }  
    }
  },
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
  	},
    animatedLogo: function (el) {
      anime({
        targets: '.animateThis',
        scale: function () { return anime.random(10, 20) / 10 },
        rotate: function () { return anime.random(-360, 360) },
        duration: function () { return anime.random(1400, 2600) },
        direction: 'alternate',
        loop: true
      })
    },
    greet() {
      //var x = this.event.clientX;
      anime.timeline() 
      .add({
        targets: '.nav__logo',
        translateX: 910,
        rotate: [90, 90],
        duration: 1400,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.animateThis',
        scale: function () { return anime.random(10, 20) / 10 },
        rotate: function () { return anime.random(-360, 360) },
        duration: function () { return anime.random(1400, 2600) },
        direction: 'alternate',
        offset: -300,
        loop: true
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
		border-bottom: 1px solid rgba(136, 168, 188, .2);
    	position: relative;
		z-index: 100;

		.nav__indicator {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 0;
			left: 0;
			width: 335px;
			height: 150px;
			margin: 0;
			padding: 0 130px 0;
			transform: rotate(90deg);
			z-index: -1;
			pointer-events: none;
			transform-origin: 50% 50%;

			display: none;

			.blue,
			.green,
			.red {
				width: 2rem;
				height: 2rem;
				margin-top: auto;
				margin-bottom: auto;
				mix-blend-mode: lighten;
			}

			.blue {background-color: rgba(136, 168, 188, .5);}
			.green {background-color: rgba(136, 168, 188, .6);}
			.red {background-color: rgba(136, 168, 188, .7);}
		}
		

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
					color: #4b5a63;
				}
			}
		}

		&.lightNav {
			color: #FFF;
			border-bottom: 1px solid rgba(255, 255, 255, .2);

			.nav__item a:hover {
					color: rgba(255, 255, 255, .6);
			}
		}
	}
</style>
