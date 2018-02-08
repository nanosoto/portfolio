<template>
	<div class="home__intro">

		<transition appear v-on:appear="introIn">
			<h2 id="tagline" class="intro__tagline">Designing & building meaningful digital products</h2>
		</transition>

		<transition appear v-on:appear="introSubTIn">
			<h2 id="subTagline" class="intro__subTagline">product designer focused on UX/UI and front-end development</h2>
		</transition>

		<transition appear v-on:appear="animeIn">
			<div>
				<div class="leftTop">
					<div class="leftTop__boxes">
						<img v-on:click="boxClicked" class="leftTop__boxes--box1" src="../assets/intro/leftTop__boxes--box1.svg">
						<img v-on:click="boxClicked" class="leftTop__boxes--box2" src="../assets/intro/leftTop__boxes--box2.svg">
						<img v-on:click="boxClicked" class="leftTop__boxes--box3" src="../assets/intro/leftTop__boxes--box3.svg">
					</div>
					<div class="leftTop__text">
						<svg viewBox="0 0 132.2 39.9">
							<g fill="none" fill-rule="evenodd" stroke="white" stroke-width="10" stroke-miterlimit="10" class="lines">
								<path d="M120.6,5.3c0,0-106.8,1-109,0"/>
								<path d="M77.7,19.5c0,0-64.7,1-66,0"/>
								<path d="M94.3,33.7c0,0-81,1-82.7,0"/>
							</g>
						</svg>					
						<img src="../assets/intro/leftTop__text.svg">
					</div>
					<div class="leftTop__arrow">
						<svg viewBox="0 0 294.4 188.1">
							<g fill="none" fill-rule="evenodd" stroke="white" stroke-width="10" stroke-miterlimit="10" class="lines">
								<path d="M280.2,10.2C260.9,121,99.5,171.2,0.2,186.3"/>
								<path d="M265,18.2l13.2-13.6c1.5-1.5,4-1,4.8,0.9l8.2,19.8"/>
							</g>
						</svg>
						<img src="../assets/intro/leftTop__arrow.svg">
					</div>
				</div>
				<div class="leftBG">
					<div class="leftBG--line">
						<svg viewBox="0 0 294.4 403.4">
							<g fill="none" fill-rule="evenodd" stroke="#A9FFF7" stroke-width="10" stroke-miterlimit="10" class="lines">
								<path d="M10.3,100.8c1.4-21.7,5.6-37.7,12.7-49.1c6.9-11,17.9-19.6,34.6-27C90.8,10,129.3,6.1,169,13.3c9,1.6,18.5,4.1,26.3,10.8c12.8,11.1,18.3,30.3,22.9,49l41.3,170.5l4.7-1.1l-4.7,1.1c6.3,26.1,8.4,50.7,6,71.1c-2.4,20.7-9.4,37-20.2,47.4c-7.3,7-16.6,11.4-27.4,13.1c-11.8,1.9-25.7,0.5-41.2-4c-23-6.7-46.7-20.1-68.5-38.7c-21.6-18.4-41-41.5-56.2-66.8C21.9,215.7,6.8,155.6,10.3,100.8z"/>
							</g>
						</svg>
					</div>
					<div class="leftBG--dots">
						<img src="../assets/intro/leftBG__dots.svg">
					</div>
				</div>
				<div class="rightTop">
					<div class="rightTop--firstLine">
						<img src="../assets/intro/rightTop__firstLine.svg">
					</div>
					<div class="rightTop--picture">
						<img src="../assets/intro/rightTop__dottedPicture.svg">
						<img src="../assets/intro/rightTop__dashedPicture.svg">
						<img src="../assets/intro/rightTop__fullPicture.svg">
					</div>
					<div class="rightTop--secondLine">
						<img src="../assets/intro/rightTop__secondLine.svg">
					</div>
					<div class="rightTop--paperPlane">
						<img src="../assets/intro/rightTop__paperPlane.svg">
					</div>
				</div>
			</div>
		</transition>

	</div>
</template>

<script>
	import anime from 'animejs'
  	import Intersect from 'vue-intersect'

	export default {
	  name: 'homeIntro',
	  components: { Intersect },
	  methods: {
		    introIn: function (el) {
		      var text = document.getElementById('tagline')
		      var msg = text.textContent
		      msg = msg.split('')
		      text.innerHTML = '<span class="letter">' + msg.join('</span><span class="letter">') + '</span>'

		      anime({
		        targets: '.intro__tagline span',
		        opacity: [0, 1],
		        translateY: [50, 0],
		        easing: 'easeOutExpo',
		        duration: 1400,
		        delay: function (el, i) {
		          return 300 + 15 * i
		        }
		      })
		    },

		    introSubTIn: function (el) {
		      var text = document.getElementById('subTagline')
		      var msg = text.textContent
		      msg = msg.split('')
		      text.innerHTML = '<span class="letter">' + msg.join('</span><span class="letter">') + '</span>'

		      anime({
		        targets: '.intro__subTagline span',
		        opacity: [0, 1],
		        translateY: [-20, 0],
		        easing: 'easeOutExpo',
		        duration: 800,
		        delay: function (el, i) {
		          return 550 + 15 * i
		        }
		      })
		    },
		    boxClicked: function (el) {
  				anime.timeline()
  				.add ({
			      targets: event.target,
			      scale: [.8, 1],
				  duration: 1000,
				  rotate: [0, 360]
  				})
		    },
		    animeIn() {
  				anime.timeline()
  				.add ({
			      targets: '.leftTop__arrow .lines path',
				  strokeDashoffset: [0, anime.setDashoffset],
				  easing: 'easeInOutSine',
				  duration: 600,
				  delay: function(el, i) { return 1200 + 250 * i }
  				})
  				.add ({
			      targets: '.leftTop__boxes img',
			      opacity: [0, 1],
			      translateY: [40, 1],
			      scale: [.8, 1],
			      rotate: [15, 0],
				  duration: 1200,
				  offset: '-=600',
  				  elasticity: 600,
				  delay: function(el, i) { return 180 * i }
  				})
  				.add ({
			      targets: '.leftTop__text .lines path',
				  strokeDashoffset: [0, anime.setDashoffset],
				  easing: 'easeInOutSine',
				  duration: 600,
  				  elasticity: 600,
				  offset: '-=1400',
				  delay: function(el, i) { return 150 * i }
  				})
  				.add ({
			      targets: '.leftBG--dots',
			      opacity: [0, 1],
			      translateY: [40, 1],
			      scale: [.8, 1],
			      rotate: [15, 0],
				  duration: 2200,
				  offset: '-=1200'
  				})
  				.add ({
			      targets: '.leftBG--line .lines path',
				  strokeDashoffset: [anime.setDashoffset, 0],
				  easing: 'easeInOutSine',
				  duration: 1600,
				  offset: '-=2500'
  				})
		    }
		  },
	}
</script>

<style lang="scss" scoped>
.home__intro {
	display: flex;
	flex-direction: column;
	margin: 0 0 87px;
	padding: 0;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: calc(100vh - 174px);

	.intro__tagline {
		font-family: 'Rubik', sans-serif;
		font-size: 54px;
		font-weight: 500;
		line-height: 1.4;
	}

	.intro__subTagline {
		font-size: 22px;
		margin: 45px 0 0;
		line-height: 1.4;
	}
}
.leftTop {
	.leftTop__boxes {
		width: 150px;
		height: auto;
		position: absolute;
		left: 210px;
		top: 155px;
		display: flex;

		img {
			height: 60px;
			width: auto;

			&:after {
				content: '';
				display: block;
				width: 30px;
				height: 30px;
				position: absolute;
				top: 0;
				left: 0;
				background: #FFF;
			}

			&:hover {
				cursor: pointer;

				&:after {
					background: rgba(65, 211, 188, .2);
				}

			}
		}
	}

	.leftTop__text {
		width: 150px;
		height: auto;
		position: absolute;
		left: 200px;
		top: 230px;

		svg, img {
			position: absolute;
			top: 0;
			left:0;
		}

		svg {
			z-index: 10;
		}
	}

	.leftTop__arrow {
		min-width: 400px;
		width: auto;
		position: absolute;
		left: -100px;
		top: 300px;

		svg, img {
			position: absolute;
			top: 0;
			left:0;
		}

		svg {
			z-index: 10;
		}
	}	
}
.leftBG {
	position: absolute;
	top: 200px;
	left: -75px;
	width: 300px;
	z-index: -1;

    .leftBG--line,
    .leftBG--dots {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 300px;
    	height: auto;
    }

    .leftBG--line {
    	z-index: 10;
    }
}
.rightTop {
	position: absolute;
	top: 300px;
	right: 0;
	width: 300px;

	.rightTop--firstLine {
		position: absolute;
		top: 15px;
		right: -60px;
		width: 180px;
	}
	.rightTop--picture {
		position: absolute;
		top: -60px;
		right: 140px;
		width: 100px;
		height: 80px;

		img {
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.rightTop--secondLine {
		position: absolute;
		top: -150px;
		right: 250px;
		width: 200px;
	}
	.rightTop--paperPlane {
		position: absolute;
		top: -180px;
	    right: 450px;
	    width: 100px;
	}
}

</style>
