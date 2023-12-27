<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped lang="scss">
$color-white: #FFF;
$color-whitey: #F0F0F0;
$color-green: #009b4d;
$color-hover-green: #00b853;

button {
  align-self: center;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-top: 60px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  letter-spacing: 1px;
  border: 0;
  border-radius: 3px;
  outline: none;
  background-color: $color-green;
  color: $color-white;

  &:enabled {
    &:hover,
    &:focus {
      background-color: $color-hover-green;
      color: $color-whitey;
      cursor: pointer;
    }
  }

  &[disabled] {
    opacity: 0.32;
  }

  box-shadow: 0 8px 16px 0 rgba(83, 99, 115, 0.32);
  font-size: 14px;
  font-weight: 700;
  min-height: 45px;

  &.in-progress {
    opacity: 0.3;
    cursor: auto;
    pointer-events: none;
  }

  > a {
    padding: 0 32px;
    line-height: 45px;
    color: $color-whitey;
  }
}
</style>
