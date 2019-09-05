<template>

  <button :class="`mui-button ${float ? 'mui-float':''} ${rounded ? 'mui-rounded':''} mui-${type} mui-${size} ${color.length || type!='default' > 0 ? 'text-white': ''} ${inverted ? 'inverted' :''} ${material ? 'material-shadow':''}`"
          :style="{background:color,'text-color':textColor+'!important' }"
          v-if="!inverted">
    <slot></slot>
  </button>

</template>
<script>

export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator (position) {
        return ['top', 'bottom'].indexOf(position) > -1
      }
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    classes: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: () => 'default'
    },
    size: {
      type: String,
      default: () => 'small',
      validator (x) {
        console.log(x)
        return x
      }
    },
    color: {
      type: String,
      default: () => ''
    },
    textColor: {
      type: String,
      default: () => 'white'
    },
    inverted: {
      type: Boolean,
      default: () => false
    },
    material: {
      type: Boolean,
      default: () => false
    },
    rounded: {
      type: Boolean,
      default: () => false
    },
    float: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main.scss';

</style>
