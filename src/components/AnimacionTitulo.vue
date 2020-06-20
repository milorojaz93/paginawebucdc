<template>
  <span class="load9" />
</template>

<script>
export default {
  name: 'AnimacionTitulo',
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
//Variables & Base Styles
$loader-color: white;
$bg-color: #1e1e1e;

.load9 {
  display: inline-block;
  position: relative;
  width: 85px;
  height: 85px;
  border-radius: 100%;
  //background: $loader-color;
  border: 5px solid transparent;
  border-bottom: 5px solid $loader-color;
  border-left: 5px solid $loader-color;
  animation: spinR 2s linear;

  &:before,
  &:after {
    content: "";
    display: block;
    border-radius: 100%;
    position: absolute;
  }

  &:before {
    height: 50px;
    width: 50px;
    border: 3px solid transparent;
    border-top: 3px solid $loader-color;
    border-right: 3px solid $loader-color;
    animation: spinL 0.75s linear;
    transform-origin: center center;
    top: 11%;
    left: 11%;
  }

  &:after {
    height: 10px;
    width: 10px;
    background: transparent;
    border: 2px solid $loader-color;
    top: 35.5%;
    left: 35.5%;
  }
}

@keyframes spinR {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinL {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
