<template>
	<div class="single-project">

		<intersect @enter.once="projectIn">
		  <div class="project__hero">
		  	<div class="hero__bg">
					<video class="hero__video" nocontrols autoplay muted loop>
						<source src="../assets/TUS/tus_bgVideo.mp4" type="video/mp4">
						Your browser does not support the video tag.
					</video>
		  	</div>
			  <div class="hero__tagline">
				  <h1>How long will this bus take?</h1>
				  <h2>designing usability for all</h2>
			  </div>
		  </div>
		</intersect>
		<div class="project__body-wrapper">
			<div class="project__body">
				<div class="project__thumbnail TUS__thumbnail">
						<img src="../assets/TUS/tus_home.gif">
				</div>
				<div class="project__overview">
					<div class="row">
						<img src="../assets/TUS/logo_tus.svg">
					</div>
					<div class="row">
						<span>summary</span>
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
					</div>
					<div class="row">
						<span>expertise</span>
						<h1>Design, Development, Interactions, Prototyping, Engineering</h1>
					</div>
					<div class="row">
						<span>platforms</span>
						<h1>Web, Mobile, iOS</h1>
					</div>
					<div class="row">
						<span>deliverables</span>
						<h1>Strategy, Concept, UI, UX, Development</h1>
					</div>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>

	</div>

</template>

<script>
	import anime from 'animejs'
	import Intersect from 'vue-intersect'
	import Parallax from 'vue-parallaxy'

	export default {
	  name: 'tus',
	  components: {
	      Parallax,
	      Intersect,
	  },
	  methods: {
	    projectIn() {
	  		anime.timeline()
	  		.add({
		  		targets: '.hero__bg',
		        opacity: {
		        	value: [0, 1],
		        	duration: 800
		        },
		        height: {
		        	value: [0, 700],
		        	duration: 1600
		        },
		        easing: 'easeOutCubic'
	  		})
	  		.add({
		  		targets: '.hero__video',
		        scale: {
		        	value: [1.2, 1],
		        	duration: 2000
		        },
		        easing: 'easeOutCubic',
		        offset: 0
	  		})
	  		.add({
		  		targets: '.project__overview .row',
		        opacity: {
		        	value: [0, 1],
		        	duration: 400
		        },
		        translateY: {
		        	value: [20, 0],
		        	duration: 1400
		        },
		        offset: '-=1800',
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
	.single-project {
		display: flex;
		flex-direction: column;
	}
	.project__hero {
		position: relative;
		top: -87px;
		left: 0;
		width: 100vw;
		height: 700px;
		display: flex;
	    margin: 0;
		padding: 0 130px;
		justify-content: center;
		align-items: center;
	}
	.hero__bg {
		position:absolute;
		top: 0;
		left: 0;
		opacity: 0;
		height: 700px;
		background: #000;
		overflow: hidden;
		transform-origin: 0 0;
		z-index: -1;
		width: 100%;

		.hero__video {
			height: 700px;
			width: 100%;
			object-fit: cover;
			opacity: .9;
		}
	}
	.hero__tagline {
		text-align: center;

		h1 {
			color: #FFF;
			font-family: 'Rubik', sans-serif;
			font-size: 54px;
			font-weight: 500;
			line-height: 1.4;
			margin: 0 0 25px;
		}
		h2 {
			color: rgba(255, 255, 255, .4);
			font-size: 22px;
			margin: 0;
			line-height: 1.4;
		}
	}
	.project__thumbnail {		
		img {
			width: 100%;
			height: auto;
			box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
			border-radius: 10px;
		}
	}
	.project__overview {
		padding: 0 45px;

		.row {
			opacity: 0;
			margin: 0 0 45px;
		}

		.project__logo {
			max-width: 350px;
		}

		span {
			font-family: 'Rubik', sans-serif;
			text-transform: uppercase;
			// color: rgba(136, 168, 188, .6);
			font-size: 12px;
			letter-spacing: 0.5px;
			margin: 0;
		}
		h1 {
			// color: rgba(136, 168, 188, 1);
			line-height: 1.4;
		}
	}
	.project__body-wrapper {
		display: grid;
	    grid-template-columns: 400px 1fr 1fr 400px;

	    .project__body {
	    	grid-area: 1 / 2 / end / 4;

	    	h3 {
	    		font-family: 'Rubik', sans-serif;
				text-transform: uppercase;
				font-weight: 500;
				letter-spacing: 0.5px;
				font-size: 32px;
				margin: 0 0 45px;
				color: #1976d2;
				line-height: 1.4;

				i {
					font-weight: 200;
					font-style: italic;
				}
	    	}

	    	p {
	    		margin: 0 0 45px;
	    	}

	    	.full-width {
	    		margin: 50px -400px 50px;
	    	}

	    	.three-cols {
	    		display: flex;
	    		padding: 0 130px;
	    		justify-content: space-around;
	    		align-items: center;

	    		.col-1 {
	    			display: flex;
	    		 	flex-direction: column;
	    		 	text-align: center;
		    		justify-content: center;
		    		align-items: center;
		    		width: 30%;
	    		}

	    		h2 {
	    			color: #1976d2;
	    			font-weight: 600;
	    			line-height: 1.6;
	    		}
	    		p {
	    			color: #42a5f5;
	    		}

	    		img {
	    			width: 200px;
	    			height: auto;
	    			margin: 0 auto 15px;
	    		}
	    	}
	    }
	}
</style>
