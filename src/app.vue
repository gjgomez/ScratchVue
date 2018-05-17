<template>
  <div class="full-width center-content">
    <hello-component name="Chicago" />
  </div>
</template>

<script>
import HelloComponent from './components/hello-component.vue'

export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss" scoped>
$color-danger: red;

.full-width {
  width: 100%; 
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: $color-danger;
}
</style>