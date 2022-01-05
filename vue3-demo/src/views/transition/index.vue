<template>
  <div>
    <button @click="show = !show">toggle</button>
    <!-- <transition name="fade">
      <div v-if="show">text</div>
    </transition> -->
    <transition name="bounce">
      <div v-if="show">text</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.bounce-enter-active {
  animation: bounce 0.6s;
}
.bounce-leave-active {
  animation: bounce 0.5s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
