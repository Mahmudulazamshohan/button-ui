<template>
  <div id="app">
    <template v-for="color in colors">
      <m-button size="small"
                 :type="color"
                 class="mx-2 my-2">
        Play
      </m-button>



    </template>
    <br>
    <template  v-for="color in colors">
      <m-button size="medium"
                :type="color"
                class="mx-2 my-2">
        Play
      </m-button>
    </template>
    <br>
    <template  v-for="color in colors">
      <m-button size="large"
                :type="color"
                class="mx-2 my-2">
        Play
      </m-button>
    </template>
    <br>
    <template v-for="color in colors">
      <m-button size="small"
                material
                :type="color"
                class="mx-2 my-2">
        Play
      </m-button>



    </template>
    <br>
    <template  v-for="color in colors">
      <m-button size="medium"
                material
                :type="color"
                class="mx-2 my-2">
        Play
      </m-button>
    </template>
    <br>
    <template  v-for="color in colors">
      <m-button size="large"
                material
                :type="color"
                class="mx-2 my-2">
        Play
      </m-button>
    </template>
    <br>
    <template v-for="color in colors">
      <m-button size="small"
                :type="color"
                float
                material
                @click="abcd"
                class="mx-2 my-2">
        <micon>
          my_location
        </micon>
      </m-button>
    </template>
    <br>
    <template v-for="color in colors">
      <m-button size="medium"
                :type="color"
                float
                material
                @click="abcd"
                class="mx-2 my-2">
        <micon>
          my_location
        </micon>
      </m-button>
    </template>
    <br>
    <template v-for="color in colors">
      <m-button size="large"
                :type="color"
                float
                material
                @click="abcd"
                class="mx-2 my-2">
        <micon>
          my_location
        </micon>
      </m-button>
    </template>

  </div>
</template>

<style lang="scss" >
  @import '@/styles/main.scss';

</style>
<script>
import MButton from './components/MButton'
import Micon from './components/Micon'
export default {
  components: { Micon, MButton },
  data(){
    return {
      colors:['success','secondary','info','warning']
    }
  },
  methods: {
    abcd (e) {
      console.log(e)
      alert('asdasdasd')
    }
  }
}
</script>
