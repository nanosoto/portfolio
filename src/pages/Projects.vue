<template>

	<div class="testing">
		<transition name="slide-fade-up" mode="out-in" appear>
			<h1 class="project1">Project 1</h1>
		</transition>
		<transition name="slide-fade-up" mode="out-in" appear>
			<h1 class="project2">Project 2</h1>
		</transition>
		<transition name="slide-fade-up" mode="out-in" appear>
			<h1 class="project3">Project 3</h1>
		</transition>
		<transition name="slide-fade-up" mode="out-in" appear>
			<h1 class="project4">Project 4</h1>
		</transition>
		<transition name="slide-fade-up" mode="out-in" appear>
			<h1 class="project5">Project 5</h1>
		</transition>
		<transition name="slide-fade-up" mode="out-in" appear>
			<h1 class="project6">Project 6</h1>
		</transition>
	</div>

</template>

<script>
export default {
  name: 'projects'
}
</script>

<style lang="scss" scoped>
.project1 {
	transition-delay: 250ms;
}
.project2 {
	transition-delay: 400ms;
}
.project3 {
	transition-delay: 600ms;
}
.project4 {
	transition-delay: 800ms;
}
.project5 {
	transition-delay: 1000ms;
}
.project6 {
	transition-delay: 1200ms;
}
</style>
