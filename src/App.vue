<template>
  <div id="app">
    <template v-for="color in colors">
      <m-button size="small"
                 :type="color"
                 class="mx-2 my-2">
        {{ color }}
      </m-button>
    </template>
    <br>
    <template  v-for="color in colors">
      <m-button size="medium"
                :type="color"
                class="mx-2 my-2">
        {{ color }}
      </m-button>
    </template>
    <br>
    <template  v-for="color in colors">
      <m-button size="large"
                :type="color"
                class="mx-2 my-2">
        {{ color }}
      </m-button>
    </template>
    <br>
    <template v-for="color in colors">
      <m-button size="small"
                material
                :type="color"
                class="mx-2 my-2">
        {{ color }}
      </m-button>



    </template>
    <br>
    <template  v-for="color in colors">
      <m-button size="medium"
                material
                :type="color"
                class="mx-2 my-2">
        {{ color }}
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
    <MButtonGroup  class="mx-2 my-2">
      <m-button  size="small"
                 material
                 type="info">
        play
      </m-button>
      <m-button  size="small"
                 type="success">
        play
    </m-button>
      <m-button  size="small"
                 type="warning">
        play
      </m-button>
    </MButtonGroup>
    <MButtonGroup  class="mx-2 my-2">
      <m-button  size="medium"
                 material
                 type="info">
        play
      </m-button>
      <m-button  size="medium"
                 type="success">
        play
      </m-button>
      <m-button  size="medium"
                 type="warning">
        play
      </m-button>
    </MButtonGroup>
    <MButtonGroup  class="mx-2 my-2">
      <m-button  size="large"
                 material
                 type="info">
        play
      </m-button>
      <m-button  size="large"
                 type="success">
        play
      </m-button>
      <m-button  size="large"
                 type="warning">
        play
      </m-button>
    </MButtonGroup>
  </div>
</template>

<style lang="scss" >
  @import '@/styles/main.scss';

</style>
<script>
import MButton from './components/MButton'
import Micon from './components/Micon'
import MButtonGroup from './components/MButtonGroup'
export default {
  components: { MButtonGroup, Micon, MButton },
  data(){
    return {
      colors:['success','secondary','info','warning','danger','success-dark','secondary-dark']
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
