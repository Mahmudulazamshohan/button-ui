<template>
  <div id="app">
    <template v-for="i in 50">
      <m-button size="large"
                 type="secondary"

                 class="mx-2 my-2" >
        Play
      </m-button>
      <m-button size="large"
                 type="info"
                 material
                 class="mx-2 my-2">
        Play
      </m-button>
      <m-button size="large"
                 type="success"
                 class="mx-2 my-2">
        Play
      </m-button>
      <m-button size="large"
                 type="warning"
                 float
                 material
                 class="mx-2 my-2">
        <i class="small material-icons">my_location</i>
      </m-button>
    </template>

  </div>
</template>

<style lang="scss" >
  @import '@/styles/main.scss';

</style>
<script>
import MButton from './components/MButton'
export default {
  components: { MButton },
  methods: {
    abcd () {
      alert('asdasdasd')
    }
  }
}
</script>
