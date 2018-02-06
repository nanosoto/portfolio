<template>
	<div>
<!--
		<div class="home__intro">
			<h1>nanosoto</h1>
			<h2>tagline</h2>
		</div>
-->
		<div class="home__projects">
			<transition name="scale-project" mode="out-in" appear>
				<div class="project" v-bind:class="className">
					<router-link to="/projects/customer-mopa">
						<div class="project__container">
							<transition name="slide-fade-up" mode="out-in" appear>
								<!--<router-link to="/projects/customerMopa" class="project__title">Customer MOPA</router-link>-->
								<router-link v-bind:key="projectTitle" to="/projects/customerMopa" class="project__title">{{ changeProjectTitle }}</router-link>
							</transition>
							<transition name="slide-fade-up" mode="out-in" appear>
								<p class="project__overview">Management web tool that allows individuals to train through demo videos</p>
							</transition>
							<div class="project__thumbnail__container CM__thumbnail">
								<transition name="fade-thumbnail" mode="out-in" appear>
									<img class="main-thumbnail" src="../assets/CM/CM_top.png">
								</transition>
								<transition name="fade-thumbnail" mode="out-in" appear>
									<img class="second-thumbnail" src="../assets/CM/CM_left.png">
								</transition>
								<transition name="fade-thumbnail" mode="out-in" appear>
									<img class="third-thumbnail" src="../assets/CM/CM_right.png">
								</transition>
							</div>
						</div>
					</router-link>
				</div>
			</transition>
			<!--<transition name="scale-project" mode="out-in" appear>-->
				<!--
					<div class="project TUS">
						<router-link to="/projects/customer-mopa">
							<div class="project__container">
								<transition name="slide-fade-up" mode="out-in" appear>
									<router-link to="/projects/customerMopa" class="project__title">TUS</router-link>
								</transition>
								<transition name="slide-fade-up" mode="out-in" appear>
									<p class="project__overview">Management web tool that allows individuals to train through demo videos</p>
								</transition>
								<img class="project__thumbnail TUS__thumbnail" src="../assets/TUS/red.png">
							</div>
						</router-link>
					</div>
				-->
				<!--</transition>-->
				<!--<transition name="scale-project" mode="out-in" appear>-->
				<!--
					<div class="project UP">
						<router-link to="/projects/customer-mopa">
							<div class="project__container">
								<transition name="slide-fade-up" mode="out-in" appear>
									<router-link to="/projects/customerMopa" class="project__title">UPONOR</router-link>
								</transition>
								<transition name="slide-fade-up" mode="out-in" appear>
									<p class="project__overview">Management web tool that allows individuals to train through demo videos</p>
								</transition>
							</div>
						</router-link>
					</div>
				-->
			<!--</transition>-->
			<button @click="cm">CM</button>
			<button @click="tus">TUS</button>
		</div>

	</div>
</template>

<script>
export default {
  	name: 'home',
  	data() {
      return {
        projectTitle: 'descargas',
        className: 'CM'
      };
    },
  	methods: {
		tus() {
			if(this.className = 'CM'){
				this.className = 'TUS';
				this.projectTitle = 'tus';
			}
			else
				this.className = 'CM';
				this.projectTitle = 'tus'
		},
		cm() {
			if(this.className = 'TUS'){
				this.className = 'CM';
				this.projectTitle = 'cm';
			}
			else
				this.className = 'TUS';
				this.projectTitle = 'cm'
		}
	},
  	computed: {
	  changeProjectTitle: function () {
	    switch (this.projectTitle) {
	      case 'cm': return 'customer mopa'
	      case 'tus': return 'TUS'
	      case 'editing': return 'Cancel'
	      default: return 'customer mopa'
	    }
	  }
	}
}
</script>

<style lang="scss" scoped>
.home__projects {
	display: grid;
    grid-template-columns: 150px 1fr 1fr 150px;
    grid-template-rows: auto;
    grid-gap: 30px;
    margin: 0 0 100px;
}
.project {
	overflow: hidden;
	border-radius: 20px;
    padding-top: 130px;

	.project__container {
			position: relative;
			margin: 0;
			padding: 50px;
			height: 350px;
			background: rgba(136, 168, 188, .15);
			display: flex;
			flex-direction: column;
			border-radius: 20px;

		.project__title {
			display: block;
			margin: 0 0 15px;
			font-family: 'Varela Round', sans-serif;
			font-size: 48px;
			text-decoration: none;
			transition-delay: 650ms;
		}
		.project__overview {
			transition-delay: 750ms;
		}
	}

	&.scale-project-enter-active {
		transition: transform 850ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity 350ms cubic-bezier(0.4, 0.0, 0.2, 1);
		transition-delay: 250ms;
	}
	&.scale-project-leave-active {
		transition: all 300ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	&.scale-project-enter, &.scale-project-leave-to {
		transform: translate(0, 50px) scaleY(.85) scaleX(.95);
		opacity: 0;
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

		.project__container {
			background: linear-gradient(to right, #42A5F5,#1976D2);

			.project__title {
				color: #FFF;
			}
			.project__overview {
				max-width: 500px;
				color: rgba(255, 255, 255, .7);
			}
			.CM__thumbnail {
				.main-thumbnail, 
				.second-thumbnail,
				.third-thumbnail {
					width: 280px;
					height: auto;
					position: absolute;
					right: 50px;
					bottom: -160px;
					transform: translate(0, 0) rotate(45deg);

					&.fade-thumbnail-enter-active {
					  transition: all 750ms ease;
					  transition-delay: 550ms;
					}
					&.fade-thumbnail-leave-active {
					  transition: all 300ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
					}
					&.fade-thumbnail-enter, &.fade-thumbnail-leave-to {
					  transform: translate(20px, 20px) rotate(48deg);
					  opacity: 0;
					}
				}
				.main-thumbnail {
					bottom: unset;
					right: 65px;
					top: -150px;

					&.fade-thumbnail-enter-active {
					  transition: opacity 450ms ease, transform 1250ms ease;
					  transition-delay: 850ms;
					}
					&.fade-thumbnail-enter, &.fade-thumbnail-leave-to {
					  transform: translate(0, 10px) rotate(45deg);
					}
				}
				.second-thumbnail {
					right: 330px;

					&.fade-thumbnail-enter-active {
					  transition-delay: 700ms;
					}
					&.fade-thumbnail-enter, &.fade-thumbnail-leave-to {
					  transform: translate(-20px, -20px) rotate(42deg);
					}
				}
			}
		}
	}

	&.TUS {
		transition-delay: 350ms;
		overflow: visible;

		.project__container {
			// background: linear-gradient(135deg, rgba(153,230,0,1) 0%, rgba(118,173,0,1) 100%);
			// height: 530px;
			overflow: hidden;
			// justify-content: flex-end;

			.project__title {
				// color: #FFF;
			}
			.project__overview {
				// color: rgba(255, 255, 255, .7);
			}
			.main__thumbnail {
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
		transition-delay: 450ms;
	}
}
</style>
