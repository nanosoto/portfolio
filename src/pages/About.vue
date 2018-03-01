<template>

  <div class="about__wrapper">
	<intersect @enter.once="aboutIn">
		<div class="about__hero">
			<h2 id="tagline" class="about__tagline">Product designer focused on</h2>
			<h2 id="subTagline" class="about__subTagline">User experience. UI . Frontend.</h2>
			<div class="about__thumbnail-wrapper">
				<parallax :speedFactor="0.25">
					<img class="about__thumbnail" src="../assets/about/1.jpg">
				</parallax>
			</div>
		</div>
	</intersect>
	<div class="about__body-wrapper">
		<div class="about__body">
			<div class="body__row">
				<p>Passionate product designer currently helping to define the overall experience and visual interface of CIC Consulting Informático products and the brand and marketing strategy aroud them. 4 years experience wireframing, coding, prototyping and conceptualizing digital products alongside engineers and business developers. Freelancing has given me the chance to solve design problems from start to finish and achieve valuable experience of project ownership.</p>
			</div>
			<div class="body__row skills">
				<div class="skills__col">
					<img class="skills__icon" src="../assets/about/product-design.svg">
					<h1>Product design</h1>
				</div>
				<div class="skills__col">
					<img class="skills__icon" src="../assets/about/ux-design.svg">
					<h1>UX design</h1>
				</div>
				<div class="skills__col">
					<img class="skills__icon" src="../assets/about/ui-design.svg">
					<h1>UI design</h1>
				</div>
				<div class="skills__col">
					<img class="skills__icon" src="../assets/about/interaction-design.svg">
					<h1>Interaction design</h1>
				</div>
			</div>
			<!--
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
			-->
			<intersect @enter.once="skillsIn">
				<div class="body__row">
					<h3>Skills</h3>
					<div class="skills__list">
						<ul>
							<li>Product Design</li>
							<li>User experience design</li>
							<li>User interface design</li>
							<li>Interaction design</li>
							<li>HTML / CSS</li>
							<li>JavaScript</li>
							<li>Wordpress</li>
							<li>GIT / SVN</li>
						</ul>
						<ul>
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
			</intersect>
			<div class="body__row download-cv">
				<router-link class="btn" target="_blank" to="/static/FernandoSoto_CV.pdf">Download CV (.pdf)</router-link>
			</div>
		</div>
	</div>
  </div>

</template>

<script>
import anime from 'animejs'
import Intersect from 'vue-intersect'
import Parallax from 'vue-parallaxy'

export default {
  name: 'about',
  components: {
	Parallax,
	Intersect,
  },
  methods: {
    aboutIn: function (el) {
		var text = document.getElementById('tagline')
		var msg = text.textContent
		msg = msg.split('')
		text.innerHTML = '<span class="letter">' + msg.join('</span><span class="letter">') + '</span>'


		var text = document.getElementById('subTagline')
		var msg = text.textContent
		msg = msg.split('')
		text.innerHTML = '<span class="letter">' + msg.join('</span><span class="letter">') + '</span>'

		anime.timeline()
		.add({
			targets: '.about__tagline .letter',
			opacity: [0, 1],
			translateY: [50, 0],
			easing: 'easeOutExpo',
			duration: 1400,
			delay: function (el, i) {
				return 0 + 15 * i
			}
		})
		.add({
			targets: '.about__subTagline .letter',
			opacity: [0, 1],
			translateY: [50, 0],
			easing: 'easeOutExpo',
			duration: 1400,
			offset: '-=1600',
			delay: function (el, i) {
				return 0 + 15 * i
			}
		})
		.add({
			targets: '.about__thumbnail-wrapper',
			height: [0, 600],
			opacity: [0, 1],
			duration: 2400,
			easing: 'easeOutExpo',
			offset: '-=2000',
		})
		.add({
			targets: '.about__thumbnail',
			translateY: [50, 0],
			scale: [1, 1.2],
			duration: 2800,
			easing: 'easeOutExpo',
			offset: '-=2600',
		})
	},
	skillsIn() {
  		anime.timeline()
  		.add({
			targets: '.skills__list li',
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 1600,
			delay: function (el, i) {
				return 200 + 45 * i
			}
		})
	}
  }
}
</script>

<style lang="scss" scoped>
	.about__hero {
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		padding: 130px;
		height: 600px;

		h2 {
			font-family: 'Rubik', sans-serif;
			font-size: 54px;
			line-height: 1.4;
			z-index: 1;
			margin: 0;
			mix-blend-mode: screen;
    		color: hsla(203, 28%, 74%, 1);

			span {
				font-weight: 500;
    			color: hsla(203, 28%, 54%, 1);
			}

			&.about__subTagline {
				color: hsla(203, 28%, 54%, 1);
				font-weight: 500;
			}
		}

		.about__thumbnail-wrapper {
			opacity: 0;
			width: 500px;
			position: absolute;
			right: 0;
			top: 0;
			overflow: hidden; 
			transform-origin: bottom;

			.about__thumbnail {
				width: 100%;
				height: 600px;
				object-fit: cover;
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

			.skills {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;

				.skills__col {
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: 50%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 0 0 90px;

					.skills__icon {
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

			.skills__list {
				display: flex;
				ul {
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: 50%;

					li {
						display: block;
						margin: 0 0 15px;
						opacity: 0;
					}
				}
			}
	    }

		.btn {
			height: 50px;
			border: 3px solid hsla(203, 28%, 74%, 1);
			color: hsla(203, 28%, 54%, 1);
			display: flex;
			justify-content: center;
			align-items: center;
			width: 300px;

			&:hover {
				border-color: hsla(203, 28%, 54%, 1);
			}
		}

		.download-cv {
			background-color: hsla(203, 28%, 94%, 1);
			display: flex;
			justify-content: center;
			align-items: center;
			height: 250px;
			margin: 90px 0;
		}
	}
</style>
