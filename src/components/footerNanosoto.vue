<template>
	
	<div class="footer-portfolio">
		<div>
			<p>All material © Fernando Soto {{ new Date().getFullYear() }}</p>
		</div>
		<div>
			<a target="_blank" href="https://twitter.com/nanosg">twitter</a>
			<a target="_blank" href="https://es.linkedin.com/in/fernandosotogomez/en">linkedin</a>
			<a target="_blank" href="http://vsco.co/nanosoto/">vsco</a>
			<a href="mailto:hello@nanosoto.com?subject=Hello%20there!">hello@nanosoto.com</a>
		</div>
	</div>

</template>

<script>
import anime from 'animejs'

export default {
  name: 'footer',
}
</script>

<style lang="scss" scoped>
	.footer-portfolio {
		width: calc(100% - 260px);
		padding: 50px 0;
		margin: 0 130px;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid rgba(136, 168, 188, 0.2);

		a {
			color: #41d3bc;
			margin: 0 35px 0 0;
			position: relative;

			&:hover {
				color: #53a99f;
				
				&:after {
					content:'>>';
					display: inline-block;
					position: absolute;
					right: -24px;
					top: 3px;
				}
			}
		}
	}
</style>
