<template>
	<div class="nav">
		<router-link to="/" class="nav__logo">
			<span>customermopa</span>
			<!--product designer-->
		</router-link>
		<ul class="nav__list">
			<li class="nav__item">
				<router-link to="/projects">
					services
				</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/about">
					about
				</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/contact">
					contact
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss" scoped>
	.nav {
		display: flex;
		padding: 15px 180px;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ECECEC;

		.nav__logo span {
		  font-weight: 900;
		  font-size: 2.5em;
		  font-family: 'Varela Round', sans-serif;
		  color: #4b5a63;
		}

		.nav__list {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 0;

			.nav__item {
				margin: 0 0 0 25px;
				list-style: none;

				&:hover {
					color: #4b5a63;
				}
			}
		}
	}
</style>
