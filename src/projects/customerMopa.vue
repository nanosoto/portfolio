<template>
	<div class="single-project">

		<intersect @enter.once="projectIn">
		  <div class="project__intro-wrapper">

		  	<div class="project__hero">
		  		<parallax>
					<img class="project__hero__thumbnail" src="../assets/CM/bg.jpg">
				</parallax>
		  	</div>
			<img class="project__thumbnail" src="../assets/CM/CM_top.png">
			<div class="project__overview">
				<div class="row">
					<img class="project__logo" src="../assets/CM/cmLogo--white.svg">
				</div>
				<div class="row">
					<p>summary</p>
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
				</div>
				<div class="row">
					<p>expertise</p>
					<h1>Design, Development, Interactions, Prototyping, Engineering</h1>
				</div>
				<div class="row">
					<p>platforms</p>
					<h1>Web, Mobile, iOS</h1>
				</div>
				<div class="row">
					<p>deliverables</p>
					<h1>Strategy, Concept, UI, UX, Development</h1>
				</div>
			</div>
		    
		  </div>
		</intersect>
		<div class="project__body-wrapper">
			<div class="project__body">

				<h3>Programador de tareas <br><i>// de mantenimiento periódico automático</i></h3>
				<p>Este proyecto nace de la necesidad de dotar de una webapp que sirva como herramienta para agilizar la creación y flujo de tareas de mantenimiento e incidencias entre usuarios y los técnicos de soporte responsables.
				</p>
				<p>
				Los principales requisitos o necesidades que se nos plantean al afrontar el proyecto y sobre los que necesitamos basar las líneas  de actuación del proyecto son:</p>

				<div class="full-width three-cols">
					<div class="col-1">
						<img class="project__hero__thumbnail" src="../assets/CM/multidevice.svg">
						<h2>Multidevice</h2>
						<p>Webapp responsive adaptable a todos los dispositivos</p>
					</div>
					<div class="col-1">
						<img class="project__hero__thumbnail" src="../assets/CM/intuitiva.svg">
						<h2>Intuitiva</h2>
						<p>Fácil de manejar para todos los perfiles de usuario</p>
					</div>
					<div class="col-1">
						<img class="project__hero__thumbnail" src="../assets/CM/escalable.svg">
						<h2>Scalability</h2>
						<p>Habilidad para crecer y adaptarse a los cambios</p>
					</div>
				</div>

				<div class="full-width">
					<img class="project__hero__thumbnail" src="../assets/CM/cm_1.png">
				</div>

				<h3>GOALS</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

				<h3>PHASES / CONTENT</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

				<h3>SOLUTION</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			</div>
		</div>

	</div>

</template>

<script>
	import anime from 'animejs'
	import Intersect from 'vue-intersect'
	import Parallax from 'vue-parallaxy'

	export default {
	  name: 'customerMopa',
	  components: {
	      Parallax,
	      Intersect,
	  },
	  methods: {
	    projectIn() {
	  		anime.timeline()
	  		.add({
		  		targets: '.project__hero',
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
		  		targets: '.project__hero__thumbnail',
		        scale: {
		        	value: [1.2, 1],
		        	duration: 2000
		        },
		        easing: 'easeOutCubic',
		        offset: 0
	  		})
	  		.add({
		  		targets: '.project__thumbnail',
		        opacity: {
		        	value: [0, 1],
		        	duration: 400
		        },
		        translateY: {
		        	value: [60, 0],
		        	duration: 1800
		        },
		        offset: '-=1200',
		        easing: 'easeOutCubic',
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
	.project__intro-wrapper {
		position: relative;
		top: -87px;
		left: 0;
		width: 100vw;
		min-height: 100vh;
		display: grid;
	    grid-template-columns: 130px 1fr 1fr 1fr 130px;
	    grid-template-rows: 87px auto;
	    grid-gap: 0;
	    margin: 0;
	}
	.project__hero {
		grid-area: 1 / 1 / 2 / end;
		opacity: 0;
		height: 700px;
		background: linear-gradient(to right, #42A5F5,#1976D2);
		overflow: hidden;
		transform-origin: 0 0;
		z-index: -1;

		.project__hero__thumbnail {
			// height: 700px;
			// width: 100%;
			// object-fit: cover;
		}
	}
	.project__thumbnail {
		grid-area: 2 / 2 / 6 / 3;
		opacity: 0;
		width: calc(100% + 130px);
		margin: 45px 0 0 -130px;
		height: auto;
	}
	.project__overview {
		grid-area: 3 / 3 / end / 5;
		// background: #FFF;
		padding: 0 45px;

		.row {
			opacity: 0;
			margin: 0 0 45px;
		}

		.project__logo {
			max-width: 350px;
		}

		p {
			font-family: 'Rubik', sans-serif;
			text-transform: uppercase;
			// color: rgba(136, 168, 188, .6);
			color: rgba(255, 255, 255, .6);
			font-size: 12px;
			letter-spacing: 0.5px;
		}
		h1 {
			// color: rgba(136, 168, 188, 1);
			color: #FFF;
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
