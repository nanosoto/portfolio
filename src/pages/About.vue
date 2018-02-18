<template>

<intersect @enter.once="aboutIn">
  <div class="about__wrapper">
	<div class="about__hero">
		<h1>Experience design and intelligent marketing for growing brands.<span>We focus on driving results.</span></h1>
		<img class="about__hero__thumbnail" src="../assets/about/1.jpg">
	</div>
	<div class="about__body-wrapper">
		<div class="about__body">
			<div class="body__row">
				<p>Passionate product designer currently helping to define the overall experience and visual interface of CIC Consulting Informático products and the brand and marketing strategy aroud them. 4 years experience wireframing, coding, prototyping and conceptualizing digital products alongside engineers and business developers. Freelancing has given me the chance to solve design problems from start to finish and achieve valuable experience of project ownership.</p>
			</div>
			<div class="body__row aptitudes">
				<div class="aptitudes__col">
					<img class="aptitudes__icon" src="../assets/about/product-design.svg">
					<h1>Product design</h1>
				</div>
				<div class="aptitudes__col">
					<img class="aptitudes__icon" src="../assets/about/ux-design.svg">
					<h1>UX design</h1>
				</div>
				<div class="aptitudes__col">
					<img class="aptitudes__icon" src="../assets/about/ui-design.svg">
					<h1>UI design</h1>
				</div>
				<div class="aptitudes__col">
					<img class="aptitudes__icon" src="../assets/about/interaction-design.svg">
					<h1>Interaction design</h1>
				</div>
			</div>
			<div class="body__row">	
				<h3>Work experience</h3>
				<h1>PRODUCT DESIGNER</h1>
				<h2>CIC Consulting Informático</h2>
				<h4>October 2013 - Present</h4>
				<br><br>
				<p>CIC is an IT solutions and services consulting company that helps its customers with personalized services of consultancy, application development services, verticalized solutions and IT services.</p>
				<p>As one of the main product designers, I have taken responsibility for all stages of the product design process and decisions. Being the only one leading the design process has given me the chance to build solid foundations with research and setup a faster and efficient process that let us develop more functional and adaptable products.</p>
				<p>Alongside a team of engineers we have developed and designed over +20 digital solutions, such as project management web apps, monitoring dashboards, social media iOS and Android apps, customer service websites and corporative digital solutions for many of the biggest energy utilities and renewable energy corporations, consultancy firms, public services and enterprises and more.</p>
			</div>
			<div class="body__row">	
				<h3>Education</h3>
				<h4>Cesine Centro Universitario, Santander</h4>
				<h2>Bachelor Honours Degree in Industrial<br>Design and Multimedia Engineering</h2>
				<h4>2010 - 2014</h4>
				<br><br>
				<h4>AIT, Ireland</h4>
				<h2>Bachelor of Arts in Design (Communications)</h2>
				<h4>International student, 2011 - 2012</h4>
			</div>
			<div class="body__row">
				<h3>Skills</h3>
				<ul>
					<li>Product Design</li>
					<li>Use experience design</li>
					<li>User interface design</li>
					<li>Interaction design</li>
					<li>HTML / CSS</li>
					<li>JavaScript</li>
					<li>Wordpress</li>
					<li>GIT / SVN</li>
					<li>Sass / Responsive web</li>
					<li>Vue.js</li>
					<li>Design Systems</li>
					<li>User centered design</li>
					<li>Prototyping / Wireframing</li>
					<li>Multidevice design</li>
					<li>Design strategy</li>
					<li>Photoshop / Illustrator / AE</li>
				</ul>
			</div>
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
	  		targets: '.about__hero__thumbnail',
			scale: [1.1, 1],
			duration: 1800,
	        easing: 'easeOutCubic'
  		})
  		.add({
	  		targets: '.about__hero h1',
	        opacity: [0, 1],
	        translateY: [250, 0],
	        duration: 1800,
	        easing: 'easeOutCubic',
	        offset: '-=1650'
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
	.about__hero {
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
		height: 600px;

		.about__hero__thumbnail {
			position: absolute;
			top: 0;
			left: 0;
			height: 600px;
			width: 100%;
			max-width: 2904px;
			object-fit: cover;
			transform: scale(1.1);
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

			.body__row {
				display: flex;
				flex-direction: column;
				margin: 0 0 45px;
			}

			h1, h2, h3, h4 {
				font-family: 'Rubik', sans-serif;
				position: relative;
				margin: 0 0 10px;
			}

			h1 {
				font-weight: 500;
			}

			h2 {
				color: #000;
				font-size: 28px;
				line-height: 1.4;
			}

			h3 {
				float: none;
				overflow: hidden;
				color: #000;
				font-weight: 500;
				letter-spacing: 0.5px;
				font-size: 36px;
				margin: 0 0 45px;

				&:after {
					content: '';
					position: absolute;
					top: 18px;
					margin: 0 0 0 15px;
					width: 100%;
					height: 3px;
					background-color: rgba(136, 168, 188, .2);
					border-radius: 3px;
				}
			}

	    	p {
	    		margin: 0 0 25px;
	    	}

			.aptitudes {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;

				.aptitudes__col {
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: 50%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 0 0 90px;

					.aptitudes__icon {
						width: auto;
						height: 100px;
						margin: 0 0 15px;
					}

					h1 {
						font-family: 'Rubik', sans-serif;
						font-size: 24px;
					}
				}
			}
	    }
	}
</style>
