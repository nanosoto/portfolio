<template>

  <div>
    <form-contact></form-contact>
  </div>

</template>

<script>
import formContact from '@/components/formContact'

export default {
  name: 'contact',
  components: {
	'form-contact': formContact,
  },
}
</script>

<style lang="scss" scoped>
</style>
