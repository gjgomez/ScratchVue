<template>
  <div class="full-width center-content">
    <hello-component name="Chicago" />
  </div>
</template>

<script>
import HelloComponent from "./components/HelloComponent.vue"

export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%; 
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: $green;
}
</style>